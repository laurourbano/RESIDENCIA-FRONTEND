"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, estado) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.estado = estado;
    }
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
    getLogradouro() {
        return this.logradouro;
    }
    setLogradouro(logradouro) {
        this.logradouro = logradouro;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getComplemento() {
        return this.complemento;
    }
    setComplemento(complemento) {
        this.complemento = complemento;
    }
    getCidade() {
        return this.cidade;
    }
    setCidade(cidade) {
        this.cidade = cidade;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
}
exports.default = Endereco;
//# sourceMappingURL=Endereco.js.map