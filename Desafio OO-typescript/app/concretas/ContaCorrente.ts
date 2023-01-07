import Conta from "../abstratas/Conta.js";
import Cliente from "./Cliente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import Credito from "./Credito.js";
import Debito from "./Debito.js";
export default class ContaCorrente extends Conta {
    private limite: number;
    private saldo: number = 0;

    constructor(numeroDaConta: string, cliente: Cliente, limite: number) {
        super(numeroDaConta, cliente);
        this.limite = limite;
    }

    public getNumeroDaConta(): string {
        return this.numeroDaConta;
    }
    public setNumeroDaConta(numeroDaConta: string) {
        this.numeroDaConta = numeroDaConta;
    }
    public getLimite(): number {
        return this.limite;
    }
    public setLimite(limite: number) {
        this.limite = limite;
    }
    public getSaldo(): number {
        return this.saldo;
    }
    public setSaldo(saldo: number) {
        this.saldo = saldo;
    }

    public mensagemSemSaldoTransferencia(
        valorTransferencia: number,
        saldoAtual: number
    ): string {
        return `
---------------------------------------
Não foi possível realizar a operação no valor de R$ ${ valorTransferencia.toFixed(2) }, pois seu saldo atual é de R$ ${ saldoAtual.toFixed(2) }
    `;
    }

    public mensagemSemSaldoSaque(valorSaque: number, saldoAtual: number): string {
        let disponivel =
            parseInt(saldoAtual.toFixed(2)) + parseInt(this.limite.toFixed(2));
        return `
---------------------------------------
Não foi possível realizar a operação no valor de R$ ${ valorSaque.toFixed(
            2
        ) }, pois seu saldo atual é de R$ ${ saldoAtual.toFixed(
            2
        ) } e seu limite é de R$ ${ this.limite.toFixed(
            2
        ) }, sendo o total disponível R$ ${ disponivel.toFixed(2) }
    `;
    }

    public mensagemTransferenciaProcessada(
        contaDestino: string,
        clienteDestino: string,
        valorTransferencia: number
    ): string {
        return `
---------------------------------------
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta Corrente: ${ this.getNumeroDaConta() }
        Nome: ${ this.getCliente().getNome() }
        -----------------------------
        Valor transferido: R$ ${ valorTransferencia.toFixed(2) }
        -----------------------------
        Conta de destino: ${ contaDestino }
        Nome: ${ clienteDestino }
        `;
    }

    public mensagemDepositoProcessado(
        numeroDaConta: string,
        valorDeposito: number
    ): string {
        return `
--------------------------------------- 
DEPÓSITO PROCESSADO
        Conta Corrente: ${ numeroDaConta }
        Nome: ${ this.getCliente().getNome() }
        ----------------------------
        Depósito de: R$ ${ valorDeposito.toFixed(2) }
        `;
    }

    public mensagemSaqueProcessado(numeroDaConta: string, valorSaque: number): string {
        return `
--------------------------------------- 
SAQUE PROCESSADO
        Conta Corrente: ${ numeroDaConta }
        Nome: ${ this.getCliente().getNome() }
        -----------------------------
        Valor sacado: ${ valorSaque.toFixed(2) }
        `;
    }
    public mensagemSaldo() {
        let disponivel =
            parseInt(this.getSaldo().toFixed(2)) +
            parseInt(this.getLimite().toFixed(2));
        return `
--------------------------------------- 
SALDO
        Conta Corrente: ${ this.getNumeroDaConta() }
        Nome: ${ this.getCliente().getNome() }
        -----------------------------
        Saldo atual de: R$ ${ this.getSaldo().toFixed(2) }
        -----------------------------
        Limite: R$ ${ this.getLimite().toFixed(2) }
        Total disponível: R$ ${ disponivel.toFixed(2) }
        `;
    }

    //transferir
    transferir(conta: ContaCorrente | ContaPoupanca, valor: number): void {
        //const dataTransacao = dataTransferencia.toLocaleDateString('pt-BR');
        const debito = new Debito(valor, new Date());
        const credito = new Credito(valor, new Date());
        //const dataTransferencia = debito.getData();
        const saldoAtual = this.getSaldo();
        const valorTransferencia = valor;
        const contaDestino = conta.getNumeroDaConta();
        const clienteDestino = conta.getCliente().getNome();

        const limite = this.getLimite();
        const novoSaldo = saldoAtual - valorTransferencia;
        let disponivel = saldoAtual + limite;

        if (disponivel < valorTransferencia) {
            this.mensagemSemSaldoTransferencia(valorTransferencia, saldoAtual);
        } else {
            conta.adicionaCreditos(credito);
            conta.setSaldo(conta.getSaldo() + valorTransferencia);

            this.adicionaDebitos(debito);
            this.setSaldo(novoSaldo);

            if (novoSaldo < 0 && disponivel > 0) {
                disponivel = this.limite + novoSaldo;
            }
        }
    }

    //depositar
    public depositar(valor: number): void {
        const credito = new Credito(valor, new Date());
        const conta = this.getNumeroDaConta();
        const valorDeposito = credito.getValor();
        const saldoAtual = this.getSaldo();
        const novoSaldo = saldoAtual + valorDeposito;

        this.setSaldo(novoSaldo);
        this.adicionaCreditos(credito);
        this.mensagemDepositoProcessado(conta, valorDeposito);
    }

    //sacar
    public sacar(valor: number) {
        const debito = new Debito(valor, new Date());
        const valorSaque = debito.getValor();
        const saldoAtual = this.getSaldo();
        let limite = this.getLimite();
        const novoSaldo = saldoAtual - valorSaque;
        const conta = this.getNumeroDaConta();
        let disponivel = saldoAtual + limite;

        if (disponivel < debito.valor) {
            this.mensagemSemSaldoSaque(valorSaque, saldoAtual);
        } else {
            this.adicionaDebitos(debito);
            this.setSaldo(novoSaldo);
            disponivel = limite + novoSaldo;
            this.mensagemSaqueProcessado(conta, valorSaque);
        }
    }
}
