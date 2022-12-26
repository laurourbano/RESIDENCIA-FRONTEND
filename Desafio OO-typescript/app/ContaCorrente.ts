import Conta from "./Conta.js";
import Cliente from "./Cliente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import Credito from "./Credito.js";
import Debito from "./Debito.js";
export default class ContaCorrente extends Conta {
    private limite: number
    private saldo: number = 0
    private cliente: Cliente
    private arrayDebitos: Debito[] = []
    private arrayCreditos: Credito[] = []

    constructor(numeroDaConta: string, cliente: Cliente, limite: number) {
        super(numeroDaConta)
        this.limite = limite
        this.cliente = cliente
    }

    public getNumeroDaConta() {
        return this.numeroDaConta
    }
    public setNumeroDaConta(numeroDaConta: string) {
        this.numeroDaConta = numeroDaConta
    }
    public getLimite() {
        return this.limite
    }
    public setLimite(limite: number) {
        this.limite = limite
    }
    public getSaldo() {
        return this.saldo
    }
    public setSaldo(saldo: number) {
        this.saldo = saldo
    }
    public getCliente() {
        return this.cliente
    }

    public adicionaCreditos(credito: Credito): void {
        this.arrayCreditos.push(credito)
    }
    public adicionaDebitos(debito: Debito): void {
        this.arrayDebitos.push(debito)
    }

    public mensagemSemSaldoTransferencia(valorTransferencia: number, saldoAtual: number) {
        console.log(`
---------------------------------------
Não foi possível realizar a operação no valor de R$ ${valorTransferencia.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)}
    `)
    }

    public mensagemSemSaldoSaque(valorSaque: number, saldoAtual: number) {
        let disponivel = parseInt(saldoAtual.toFixed(2)) + parseInt(this.limite.toFixed(2))
        console.log(`
---------------------------------------
Não foi possível realizar a operação no valor de R$ ${valorSaque.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)} e seu limite é de R$ ${this.limite.toFixed(2)}, sendo o total disponível R$ ${disponivel.toFixed(2)}
    `)
    }

    public mensagemTransferenciaProcessada(contaDestino: string, clienteDestino: string, valorTransferencia: number) {
        console.log(`
---------------------------------------
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor transferido: R$ ${valorTransferencia.toFixed(2)}
        -----------------------------
        Conta de destino: ${contaDestino}
        Nome: ${clienteDestino}
        `)
    }

    public mensagemDepositoProcessado(numeroDaConta: string, valorDeposito: number) {
        console.log(`
--------------------------------------- 
DEPÓSITO PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        ----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        `)
    }

    public mensagemSaqueProcessado(numeroDaConta: string, valorSaque: number) {
        console.log(`
--------------------------------------- 
SAQUE PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        `)
    }
    public mensagemSaldo() {
        let disponivel = parseInt(this.getSaldo().toFixed(2)) + parseInt(this.getLimite().toFixed(2))
        console.log(`
--------------------------------------- 
SALDO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        -----------------------------
        Limite: R$ ${this.getLimite().toFixed(2)}
        Total disponível: R$ ${disponivel.toFixed(2)}
        `)
        console.log(this.arrayCreditos)
        console.log(this.arrayDebitos)
    }

    //transferir
    transferir(conta: ContaCorrente | ContaPoupanca, valor: number): void {
        const debito = new Debito(valor, new Date())
        const credito = new Credito(valor, new Date())
        const saldoAtual = this.getSaldo()
        const valorTransferencia = valor
        const dataTransferencia = debito.getData()
        const dataTransacao = dataTransferencia.toLocaleDateString('pt-BR')
        const contaDestino = conta.getNumeroDaConta()
        const clienteDestino = conta.getCliente().getNome()

        const limite = this.getLimite()
        const novoSaldo = saldoAtual - valorTransferencia
        let disponivel = saldoAtual + limite

        if ((disponivel) < valorTransferencia) {
            this.mensagemSemSaldoTransferencia(valorTransferencia, saldoAtual)
        } else {
            conta.adicionaCreditos(credito)
            conta.setSaldo(conta.getSaldo() + valorTransferencia)

            this.adicionaDebitos(debito)
            this.setSaldo(novoSaldo)

            if (novoSaldo < 0 && disponivel > 0) {
                disponivel = this.limite + novoSaldo
            }

            this.mensagemTransferenciaProcessada(contaDestino, clienteDestino, valorTransferencia)
        }
    }

    //depositar
    public depositar(valor: number): void {
        const credito = new Credito(valor, new Date())
        const dataDeposito = credito.getData()
        const conta = this.getNumeroDaConta()
        const dataTransacao = dataDeposito.toLocaleDateString('pt-BR')
        const valorDeposito = credito.getValor()
        const saldoAtual = this.getSaldo()
        const novoSaldo = saldoAtual + valorDeposito

        this.setSaldo(novoSaldo)
        this.adicionaCreditos(credito)
        this.mensagemDepositoProcessado(conta, valorDeposito)
    };

    //sacar
    public sacar(valor: number) {
        const debito = new Debito(valor, new Date())
        const valorSaque = debito.getValor()
        const dataTransacao = debito.getData().toLocaleDateString('pt-br')
        const saldoAtual = this.getSaldo()
        let limite = this.getLimite()
        const novoSaldo = saldoAtual - valorSaque
        const conta = this.getNumeroDaConta()
        let disponivel = saldoAtual + limite

        if (disponivel < debito.valor) {
            this.mensagemSemSaldoSaque(valorSaque, saldoAtual)
        } else {
            this.adicionaDebitos(debito)
            this.setSaldo(novoSaldo)
            disponivel = limite + novoSaldo
            //colocar condicao pra reduzir o limite quando saldo negativo

            this.mensagemSaqueProcessado(conta, valorSaque)
        };
    }

}
