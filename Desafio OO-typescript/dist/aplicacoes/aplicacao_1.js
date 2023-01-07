"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_1 = void 0;
const Cargo_1 = __importDefault(require("../concretas/Cargo"));
const Funcionario_1 = __importDefault(require("../concretas/Funcionario"));
function aplicacao_1() {
    const atendente = new Cargo_1.default("Atendente");
    const gerente = new Cargo_1.default("Gerente");
    const funcionario1 = new Funcionario_1.default("000.000.000-01", "Flavio", "(41)97777-9999", atendente, 2000);
    const funcionario2 = new Funcionario_1.default("111.111.111-00", "Joel", "(41)96666-9999", gerente, 5000);
    console.log(`
   --- I${aplicacao_1.name} --- 
   `);
    console.log(`
Nome: ${funcionario1.getNome()}
Cargo: ${funcionario1.getCargo().getNome()}
Salário: ${funcionario1.getSalario().toFixed(2)}
`);
    console.log(`
Nome: ${funcionario2.getNome()}
Cargo: ${funcionario2.getCargo().getNome()}
Salário: ${funcionario2.getSalario().toFixed(2)}
`);
    console.log(`
   --- F${aplicacao_1.name} --- 
   `);
}
exports.aplicacao_1 = aplicacao_1;
//# sourceMappingURL=aplicacao_1.js.map