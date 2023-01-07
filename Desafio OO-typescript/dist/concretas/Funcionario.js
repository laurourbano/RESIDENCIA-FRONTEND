"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_js_1 = __importDefault(require("../abstratas/Pessoa.js"));
class Funcionario extends Pessoa_js_1.default {
    constructor(cpf, nome, telefone, cargo, salario) {
        super(cpf, nome, telefone);
        this.cargos = [];
        this.cargo = cargo;
        this.salario = salario;
    }
    addCargo(cargo) {
        this.cargos.push(cargo);
    }
    getCargo() {
        return this.cargo;
    }
    setCargo(cargo) {
        this.cargo = cargo;
    }
    getSalario() {
        return this.salario;
    }
    setSalario(salario) {
        this.salario = salario;
    }
    autenticaUsuario() {
        return true;
    }
}
exports.default = Funcionario;
//# sourceMappingURL=Funcionario.js.map