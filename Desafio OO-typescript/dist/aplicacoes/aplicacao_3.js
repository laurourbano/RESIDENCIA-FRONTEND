"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_3 = void 0;
const Cliente_1 = __importDefault(require("../Cliente"));
const ContaCorrente_1 = __importDefault(require("../ContaCorrente"));
const Endereco_1 = __importDefault(require("../Endereco"));
function aplicacao_3() {
    const endereco1 = new Endereco_1.default('80.000-001', 'rua androidum', '123', 'casa', 'Curitiba', 'Paraná');
    const cliente1 = new Cliente_1.default("100.000.000-00", "Euclides Cunha", "(41)99999-9999", true, [endereco1]);
    const conta1 = new ContaCorrente_1.default('001', 1000, cliente1);
    conta1.depositar(100);
    conta1.depositar(100);
    conta1.depositar(100);
    conta1.sacar(50);
}
exports.aplicacao_3 = aplicacao_3;
