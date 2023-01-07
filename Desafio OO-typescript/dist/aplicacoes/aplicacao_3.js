"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_3 = void 0;
const Cliente_js_1 = __importDefault(require("../concretas/Cliente.js"));
const ContaCorrente_js_1 = __importDefault(require("../concretas/ContaCorrente.js"));
function aplicacao_3() {
    const cliente1 = new Cliente_js_1.default("100.000.000-00", "Euclides Cunha", "(41)99999-9999", true);
    const conta1 = new ContaCorrente_js_1.default("001", cliente1, 1000);
    console.log(`
   --- I${aplicacao_3.name} --- 
   `);
    conta1.depositar(100);
    conta1.depositar(100);
    conta1.depositar(100);
    conta1.sacar(50);
    conta1.mensagemSaldo();
    console.log(`
   --- F${aplicacao_3.name} --- 
   `);
}
exports.aplicacao_3 = aplicacao_3;
//# sourceMappingURL=aplicacao_3.js.map