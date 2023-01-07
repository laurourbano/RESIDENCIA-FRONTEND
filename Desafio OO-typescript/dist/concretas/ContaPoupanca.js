"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_js_1 = __importDefault(require("../abstratas/Conta.js"));
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
        const saldoAtual = this.getSaldo();
        if (valor > 0) {
            this.adicionaCreditos(credito);
            this.setSaldo(credito.getValor() + saldoAtual);
            this.mensagemDepositoProcessado(this.numeroDaConta, valor);
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
            console.log(elemento);
            return elemento;
        });
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
        Valor sacado: R$ ${valorSaque.toFixed(2)}
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
        Saldo atual de: R$ ${this.calculaRendimentoMensal()}
        `);
    }
}
exports.default = ContaPoupanca;
//# sourceMappingURL=ContaPoupanca.js.map