"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_js_1 = __importDefault(require("../abstratas/Conta.js"));
const Credito_js_1 = __importDefault(require("./Credito.js"));
const Debito_js_1 = __importDefault(require("./Debito.js"));
class ContaCorrente extends Conta_js_1.default {
    constructor(numeroDaConta, cliente, limite) {
        super(numeroDaConta, cliente);
        this.saldo = 0;
        this.limite = limite;
    }
    getNumeroDaConta() {
        return this.numeroDaConta;
    }
    setNumeroDaConta(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
    getLimite() {
        return this.limite;
    }
    setLimite(limite) {
        this.limite = limite;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    mensagemSemSaldoTransferencia(valorTransferencia, saldoAtual) {
        return `
---------------------------------------
Não foi possível realizar a operação no valor de R$ ${valorTransferencia.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)}
    `;
    }
    mensagemSemSaldoSaque(valorSaque, saldoAtual) {
        let disponivel = parseInt(saldoAtual.toFixed(2)) + parseInt(this.limite.toFixed(2));
        return `
---------------------------------------
Não foi possível realizar a operação no valor de R$ ${valorSaque.toFixed(2)}, pois seu saldo atual é de R$ ${saldoAtual.toFixed(2)} e seu limite é de R$ ${this.limite.toFixed(2)}, sendo o total disponível R$ ${disponivel.toFixed(2)}
    `;
    }
    mensagemTransferenciaProcessada(contaDestino, clienteDestino, valorTransferencia) {
        return `
---------------------------------------
TRANFERENCIA EFETUADA COM SUCESSO.
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor transferido: R$ ${valorTransferencia.toFixed(2)}
        -----------------------------
        Conta de destino: ${contaDestino}
        Nome: ${clienteDestino}
        `;
    }
    mensagemDepositoProcessado(numeroDaConta, valorDeposito) {
        return `
--------------------------------------- 
DEPÓSITO PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        ----------------------------
        Depósito de: R$ ${valorDeposito.toFixed(2)}
        `;
    }
    mensagemSaqueProcessado(numeroDaConta, valorSaque) {
        return `
--------------------------------------- 
SAQUE PROCESSADO
        Conta Corrente: ${numeroDaConta}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Valor sacado: ${valorSaque.toFixed(2)}
        `;
    }
    mensagemSaldo() {
        let disponivel = parseInt(this.getSaldo().toFixed(2)) +
            parseInt(this.getLimite().toFixed(2));
        return `
--------------------------------------- 
SALDO
        Conta Corrente: ${this.getNumeroDaConta()}
        Nome: ${this.getCliente().getNome()}
        -----------------------------
        Saldo atual de: R$ ${this.getSaldo().toFixed(2)}
        -----------------------------
        Limite: R$ ${this.getLimite().toFixed(2)}
        Total disponível: R$ ${disponivel.toFixed(2)}
        `;
    }
    transferir(conta, valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        const credito = new Credito_js_1.default(valor, new Date());
        const saldoAtual = this.getSaldo();
        const valorTransferencia = valor;
        const contaDestino = conta.getNumeroDaConta();
        const clienteDestino = conta.getCliente().getNome();
        const limite = this.getLimite();
        const novoSaldo = saldoAtual - valorTransferencia;
        let disponivel = saldoAtual + limite;
        if (disponivel < valorTransferencia) {
            this.mensagemSemSaldoTransferencia(valorTransferencia, saldoAtual);
        }
        else {
            conta.adicionaCreditos(credito);
            conta.setSaldo(conta.getSaldo() + valorTransferencia);
            this.adicionaDebitos(debito);
            this.setSaldo(novoSaldo);
            if (novoSaldo < 0 && disponivel > 0) {
                disponivel = this.limite + novoSaldo;
            }
        }
    }
    depositar(valor) {
        const credito = new Credito_js_1.default(valor, new Date());
        const conta = this.getNumeroDaConta();
        const valorDeposito = credito.getValor();
        const saldoAtual = this.getSaldo();
        const novoSaldo = saldoAtual + valorDeposito;
        this.setSaldo(novoSaldo);
        this.adicionaCreditos(credito);
        this.mensagemDepositoProcessado(conta, valorDeposito);
    }
    sacar(valor) {
        const debito = new Debito_js_1.default(valor, new Date());
        const valorSaque = debito.getValor();
        const saldoAtual = this.getSaldo();
        let limite = this.getLimite();
        const novoSaldo = saldoAtual - valorSaque;
        const conta = this.getNumeroDaConta();
        let disponivel = saldoAtual + limite;
        if (disponivel < debito.valor) {
            this.mensagemSemSaldoSaque(valorSaque, saldoAtual);
        }
        else {
            this.adicionaDebitos(debito);
            this.setSaldo(novoSaldo);
            disponivel = limite + novoSaldo;
            this.mensagemSaqueProcessado(conta, valorSaque);
        }
    }
}
exports.default = ContaCorrente;
//# sourceMappingURL=ContaCorrente.js.map