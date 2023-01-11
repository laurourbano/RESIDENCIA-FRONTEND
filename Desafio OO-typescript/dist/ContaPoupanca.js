"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_js_1 = __importDefault(require("./Conta.js"));
const Credito_js_1 = __importDefault(require("./Credito.js"));
const Debito_js_1 = __importDefault(require("./Debito.js"));
class ContaPoupanca extends Conta_js_1.default {
    constructor(numeroDaConta, cliente) {
        super(numeroDaConta, cliente);
        this.rentabilidadeMensal = 1 / 100;
        this.saldo = 0;
    }
    getNumeroDaConta() {
        return this.numeroDaConta;
    }
    setNumeroDaConta(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
    getRentabilidadeMensal() {
        return this.rentabilidadeMensal;
    }
    setRentabilidadeMensal(rentabilidadeMensal) {
        this.rentabilidadeMensal = rentabilidadeMensal;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    depositar(valor) {
        const credito = new Credito_js_1.default(valor, new Date());
        const dataDeposito = credito.getData();
        const valorDeposito = credito.getValor();
        const saldoAtual = this.getSaldo();
        if (valor > 0) {
            this.adicionaCreditos(credito);
            this.setSaldo(saldoAtual + this.calculaRendimentoMensal());
            this.mensagemDepositoProcessado(this.getNumeroDaConta(), valorDeposito);
        }
        return dataDeposito;
    }
    sacar(valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        const dataSaque = debito.getData();
        const saldoAtual = this.getSaldo();
        let valorSaque = debito.getValor();
        if (this.getSaldo() < valor) {
            this.mensagemSemSaldo(valorSaque, saldoAtual);
        }
        else {
            this.adicionaDebitos(debito);
            this.setSaldo(saldoAtual - debito.getValor());
            this.mensagemSaqueProcessado(this.numeroDaConta, valor);
            while (valor > this.creditos[0].getValor()) {
                valorSaque -= this.creditos[0].getValor();
                if (this.creditos[0].getValor() === 0) {
                    this.creditos.shift();
                }
            }
        }
        return dataSaque;
    }
    calculaRendimentoMensal() {
        this.creditos.forEach((elemento) => {
            elemento.getData();
            if (!this.getSaldo()) {
                this.setSaldo(elemento.getValor());
            }
            else {
                let saldoAtual = this.getSaldo();
                this.setSaldo(((elemento.getValor() + saldoAtual * this.rentabilidadeMensal)));
            }
        });
        return this.getSaldo();
    }
    ;
    calcularSaldo() {
        for (let i = 0; i < this.creditos.length; i++) {
            let saldo = 0;
            return saldo += this.creditos[i].getValor();
        }
        console.log(this.creditos);
    }
    mensagemSemSaldo(valor, saldoAtual) {
        console.log(`
---------------------------------------
Não é possível realizar a operação no valor de R$ ${valor.toFixed(2)}, 
pois seu saldo é de R$ ${saldoAtual.toFixed(2)}.
        `);
    }
    mensagemSaqueProcessado(numeroDaConta, valorSaque) {
        console.log(`
---------------------------------------
SAQUE PROCESSADO
        Conta Poupança: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        `);
    }
    mensagemDepositoProcessado(numeroDaConta, valorDeposito) {
        console.log(`
---------------------------------------
DEPÓSITO PROCESSADO
        Conta Poupança: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        `);
    }
    mensagemSaldo() {
        console.log(`
---------------------------------------
SALDO
        Conta Poupança: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        `);
    }
}
exports.default = ContaPoupanca;
//# sourceMappingURL=ContaPoupanca.js.map