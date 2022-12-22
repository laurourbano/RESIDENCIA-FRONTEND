import Conta from "./Conta.js";
import Cliente from "./Cliente.js";
import ContaPoupanca from "./ContaPoupanca.js";
import Credito from "./Credito.js";
import Debito from "./Debito.js";
export default class ContaCorrente extends Conta {
    private limite: number
    private saldo: number = 0
    private readonly cliente: Cliente
    private readonly arrayDebitos: Debito[] = []
    private readonly arrayCreditos: Credito[] = []

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

    public mensagemSemSaldo(valor: Debito) {
        `
Não foi possível realizar a operação no valor de ${valor.getValor()}, pois seu saldo atual é de R$ ${this.getSaldo()}
    `}

    public mensagemTransferenciaProcessada(conta: ContaCorrente | ContaPoupanca, valor: Debito) {
        `
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor transferido: R$ ${valor.getValor()}
        Conta de destino: ${conta.getNumeroDaConta()}
        -----------------------------
        Saldo atual da conta ${this.getNumeroDaConta()}: R$ ${this.getSaldo()}
            `}
    public mensagemDepositoProcessado(valor: Credito) {
        `
DEPÓSITO PROCESSADO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        Depósito de: R$ ${valor.getValor().toFixed(2)}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
            `}
    public mensagemSaqueProcessado(valor: Debito) {

    }
    public mensagemSaldo() {
        `Saldo disponível é de R$ ${this.getSaldo()}`
    }

    //transferir
    transferir(conta: ContaCorrente | ContaPoupanca, valor: Debito): void {
        const debito = new Debito(valor.getValor(), new Date())
        this.adicionaDebitos(debito)

        if (this.getSaldo() < valor.getValor()) {
            console.log(this.mensagemSemSaldo)
        } else {
            this.setSaldo(this.getSaldo() - valor.getValor())


            conta.setSaldo(conta.getSaldo() + valor.getValor())

            console.log(this.mensagemTransferenciaProcessada(conta, valor),)
        }

    }

    //deposita
    public depositar(valor: Credito): void {
        const credito = new Credito(valor.getValor(), new Date())
        this.adicionaCreditos(credito)

        this.setSaldo(this.getSaldo() + valor.getValor())

        console.log(this.mensagemDepositoProcessado(valor))
    };

    //saca
    public sacar(valor: Debito): void {
        if (this.getSaldo() < valor.getValor()) {
            console.log(this.mensagemSemSaldo(valor))
        } else {
            console.log(this.mensagemSaqueProcessado(valor)
            )
            this.setSaldo(this.getSaldo() - valor.getValor())

            const debito = new Debito(valor.getValor(), new Date())
            this.adicionaDebitos(debito)

            console.log(`
        -----------------------------
        Saldo Atual: R$ ${this.getSaldo().toFixed(2)}
        `)
        };
    }

    //saldo
    calcularSaldo(arrayDebitos: Array<number>, arrayCreditos: Array<number>) {
        arrayCreditos.forEach((credito) => {
            this.setSaldo(this.getSaldo() + credito)
        });
        arrayDebitos.forEach((debito) => {
            this.setSaldo(this.getSaldo() - debito)
        });
        console.log(this.mensagemSaldo())
    }
}