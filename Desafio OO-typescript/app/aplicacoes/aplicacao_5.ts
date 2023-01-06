import Cliente from "../concretas/Cliente.js";
import ContaPoupanca from "../concretas/ContaPoupanca.js";

export function aplicacao_5(): void {
  const cliente1 = new Cliente(
    "222.000.000-01",
    "Lauro Otávio",
    "(41)97654-9999",
    true
  );
  const conta5 = new ContaPoupanca("005", cliente1);

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
}
