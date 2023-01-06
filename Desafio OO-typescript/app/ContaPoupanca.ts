import Cliente from "./Cliente.js";
import Conta from "./Conta.js";
import Credito from "./Credito.js";
import Debito from "./Debito.js";

export default class ContaPoupanca extends Conta {
    private rentabilidadeMensal: number = 1 / 100; //1 por cento ao mês
    private saldo: number = 0;

    constructor(numeroDaConta: string, cliente: Cliente) {
        super(numeroDaConta, cliente);
    }

    public getNumeroDaConta(): string {
        return this.numeroDaConta;
    }
    public setNumeroDaConta(numeroDaConta: string) {
        this.numeroDaConta = numeroDaConta;
    }
    public getRentabilidadeMensal(): number {
        return this.rentabilidadeMensal;
    }
    public setRentabilidadeMensal(rentabilidadeMensal: number) {
        this.rentabilidadeMensal = rentabilidadeMensal;
    }
    public getSaldo(): number {
        return this.saldo;
    }
    public setSaldo(saldo: number) {
        this.saldo = saldo;
    }

    //deposita
    public depositar(valor: number): Date {
        const credito = new Credito(valor, new Date());
        const dataDeposito = credito.getData();
        const valorDeposito = credito.getValor();
        const saldoAtual = this.getSaldo();

        if (valor > 0) {
            this.adicionaCreditos(credito);
            this.setSaldo(saldoAtual + valor + saldoAtual * this.rentabilidadeMensal);

            this.mensagemDepositoProcessado(this.getNumeroDaConta(), valorDeposito);
        }
        return dataDeposito;
    }
    1
    //saca
    public sacar(valor: number) {
        const debito = new Debito(valor, new Date());
        const dataSaque = debito.getData();

        const valorSaque = debito.getValor();
        const saldoAtual = this.getSaldo();
        const novoSaldo = saldoAtual - valorSaque;

        if (this.getSaldo() < valor) {
            this.mensagemSemSaldo(valorSaque, saldoAtual);
        } else {
            this.setSaldo(novoSaldo);
            this.mensagemSaqueProcessado(this.getNumeroDaConta(), valorSaque);
            this.adicionaDebitos(debito);
        }
        return dataSaque;
    }

    public calculaRendimentoMensal(): void {
        Credito.creditos.forEach((elemento: Credito) => {
            elemento.getValor() + elemento.getValor() * this.rentabilidadeMensal;
        });
    }

    public mensagemSemSaldo(valor: number, saldoAtual: number) {
        console.log(`
---------------------------------------
Não é possível realizar a operação no valor de R$ ${ valor.toFixed(2) }, 
pois seu saldo é de R$ ${ saldoAtual.toFixed(2) }.
        `);
    }

    public mensagemSaqueProcessado(numeroDaConta: string, valorSaque: number) {
        console.log(`
---------------------------------------
SAQUE PROCESSADO
        Conta Poupança: ${ numeroDaConta }
        Nome: ${ this.getCliente().getNome() }
        -----------------------------
        Valor sacado: ${ valorSaque.toFixed(2) }
        `);
    }
    public mensagemDepositoProcessado(
        numeroDaConta: string,
        valorDeposito: number
    ) {
        console.log(`
---------------------------------------
DEPÓSITO PROCESSADO
        Conta Poupança: ${ numeroDaConta }
        Nome: ${ this.getCliente().getNome() }
        -----------------------------
        Depósito de: R$ ${ valorDeposito.toFixed(2) }
        `);
    }
    public mensagemSaldo() {
        console.log(`
---------------------------------------
SALDO
        Conta Poupança: ${ this.getNumeroDaConta() }
        Nome: ${ this.getCliente().getNome() }
        -----------------------------
        Saldo atual de: R$ ${ this.getSaldo().toFixed(2) }
        `);
    }

}
