"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aplicacao_5 = void 0;
const Cliente_1 = __importDefault(require("../Cliente"));
const ContaPoupanca_1 = __importDefault(require("../ContaPoupanca"));
function aplicacao_5() {
    const cliente1 = new Cliente_1.default("222.000.000-01", "Lauro Otávio", "(41)97654-9999", true);
    const conta5 = new ContaPoupanca_1.default('005', cliente1);
    conta5.depositar(0);
    conta5.depositar(12);
    conta5.depositar(4);
    conta5.sacar(23);
}
exports.aplicacao_5 = aplicacao_5;
