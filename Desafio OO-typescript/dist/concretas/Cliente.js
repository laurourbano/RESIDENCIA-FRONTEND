"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_js_1 = __importDefault(require("../abstratas/Pessoa.js"));
class Cliente extends Pessoa_js_1.default {
    constructor(cpf, nome, telefone, vip) {
        super(cpf, nome, telefone);
        this.enderecos = [];
        this.contas = [];
        this.vip = vip;
    }
    addConta(conta) {
        this.contas.push(conta);
    }
    getVip() {
        return this.vip;
    }
    setVip(vip) {
        this.vip = vip;
    }
    addEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    listarEnderecos() {
        console.log(this.getNome());
        console.log(this.getCpf());
        for (const endereco of this.enderecos) {
            console.log(JSON.stringify(endereco));
        }
    }
    autenticaUsuario() {
        return true;
    }
}
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map