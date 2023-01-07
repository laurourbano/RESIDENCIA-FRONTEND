"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Credito {
    constructor(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
        this.getData().toUTCString();
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
}
exports.default = Credito;
//# sourceMappingURL=Credito.js.map