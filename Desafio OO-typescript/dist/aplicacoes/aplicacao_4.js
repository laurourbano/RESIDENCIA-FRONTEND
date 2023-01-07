"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_4 = void 0;
const Cliente_js_1 = __importDefault(require("../concretas/Cliente.js"));
const ContaCorrente_js_1 = __importDefault(require("../concretas/ContaCorrente.js"));
const ContaPoupanca_js_1 = __importDefault(require("../concretas/ContaPoupanca.js"));
function aplicacao_4() {
    const cliente1 = new Cliente_js_1.default("111.111.111-11", "Lauro Otávio", "(41)99999-9999", true);
    console.log(`
   --- I${aplicacao_4.name} --- 
   `);
    const conta2 = new ContaCorrente_js_1.default("002", cliente1, 2000);
    conta2.mensagemSaldo();
    conta2.depositar(1000);
    conta2.mensagemSaldo();
    const cliente2 = new Cliente_js_1.default("222.222.222-22", "John Doe", "(41)99999-9998", true);
    const conta3 = new ContaPoupanca_js_1.default("003", cliente2);
    conta3.mensagemSaldo();
    conta3.depositar(1000);
    conta3.mensagemSaldo();
    conta2.transferir(conta3, 500);
    conta2.mensagemSaldo();
    conta3.mensagemSaldo();
    console.log(`
   --- F${aplicacao_4.name} --- 
   `);
}
exports.aplicacao_4 = aplicacao_4;
//# sourceMappingURL=aplicacao_4.js.map