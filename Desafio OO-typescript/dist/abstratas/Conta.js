"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(numeroDaConta, cliente) {
        this.debitos = [];
        this.creditos = [];
        this.numeroDaConta = numeroDaConta;
        this.cliente = cliente;
    }
    getCliente() {
        return this.cliente;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    adicionaCreditos(credito) {
        this.creditos.push(credito);
    }
    adicionaDebitos(debito) {
        this.debitos.push(debito);
    }
}
exports.default = Conta;
//# sourceMappingURL=Conta.js.map