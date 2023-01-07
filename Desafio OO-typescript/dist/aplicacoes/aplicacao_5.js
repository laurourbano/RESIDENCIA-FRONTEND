"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_5 = void 0;
const Cliente_js_1 = __importDefault(require("../concretas/Cliente.js"));
const ContaPoupanca_js_1 = __importDefault(require("../concretas/ContaPoupanca.js"));
function aplicacao_5() {
    const cliente1 = new Cliente_js_1.default("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true);
    const conta5 = new ContaPoupanca_js_1.default("005", cliente1);
    console.log(`
   --- I${aplicacao_5.name} --- 
   `);
    conta5.depositar(200).setFullYear(2022, 0, 1);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 1, 1);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 2, 1);
    conta5.mensagemSaldo();
    conta5.sacar(100).setFullYear(2022, 2, 5);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 3, 1);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 4, 1);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 5, 1);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 6, 1);
    conta5.mensagemSaldo();
    conta5.sacar(200).setFullYear(2022, 6, 8);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 7, 1);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 8, 1);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 9, 1);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 10, 1);
    conta5.mensagemSaldo();
    conta5.depositar(200).setFullYear(2022, 11, 1);
    conta5.mensagemSaldo();
    console.log(`
   --- F${aplicacao_5.name} --- 
   `);
    conta5.calculaRendimentoMensal();
}
exports.aplicacao_5 = aplicacao_5;
//# sourceMappingURL=aplicacao_5.js.map