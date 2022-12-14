"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_2 = void 0;
const Cliente_1 = __importDefault(require("../Cliente"));
const Endereco_1 = __importDefault(require("../Endereco"));
function aplicacao_2() {
    const cliente5 = new Cliente_1.default("100.000.000-00", "Euclides Cunha", "(41)99999-9999", true);
    const endereco1 = new Endereco_1.default("80.111-001", "rua a", "555", "casa", "Curitiba", "Paraná");
    const endereco2 = new Endereco_1.default("80.222-001", "rua b", "444", "casa", "Curitiba", "Paraná");
    const endereco3 = new Endereco_1.default("80.333-001", "rua c", "333", "casa", "Curitiba", "Paraná");
    cliente5.addEndereco(endereco1);
    cliente5.addEndereco(endereco2);
    cliente5.addEndereco(endereco3);
    console.log(`
${cliente5.listarEnderecos()}
`);
}
exports.aplicacao_2 = aplicacao_2;
//# sourceMappingURL=aplicacao_2.js.map