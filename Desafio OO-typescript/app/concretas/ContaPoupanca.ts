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

        if (valor > 0) {
            this.adicionaCreditos(credito);
        }
        return dataDeposito;
    }

    //saca
    public sacar(valor: number): Date {
        const debito = new Debito(valor, new Date());
        const dataSaque = debito.getData();
        const saldoAtual = this.getSaldo();

        let valorSaque = debito.getValor();

        if (this.getSaldo() < valor) {
            this.mensagemSemSaldo(valorSaque, saldoAtual);
        } else {
            this.adicionaDebitos(debito)
            while (valor > Credito.creditos[ 0 ].getValor()) {
                valorSaque -= Credito.creditos[ 0 ].getValor()
                if (Credito.creditos[ 0 ].getValor() === 0){
                    Credito.creditos.shift()
                }
            }
        }
        return Credito.creditos;
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
