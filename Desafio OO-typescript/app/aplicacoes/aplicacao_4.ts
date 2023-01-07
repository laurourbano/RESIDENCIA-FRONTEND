import Cliente from "../concretas/Cliente.js";
import ContaCorrente from "../concretas/ContaCorrente.js";
import ContaPoupanca from "../concretas/ContaPoupanca.js";

export function aplicacao_4(): void {
  const cliente1 = new Cliente(
    "111.111.111-11",
    "Lauro Otávio",
    "(41)99999-9999",
    true
  );
  console.log(`
   --- I${ aplicacao_4.name } --- 
   `);
  const conta2 = new ContaCorrente("002", cliente1, 2_000);
  conta2.mensagemSaldo();
  conta2.depositar(1000);
  conta2.mensagemSaldo();

  const cliente2 = new Cliente(
    "222.222.222-22",
    "John Doe",
    "(41)99999-9998",
    true
  );
  const conta3 = new ContaPoupanca("003", cliente2);
  conta3.mensagemSaldo();
  conta3.depositar(1000);
  conta3.mensagemSaldo();

  conta2.transferir(conta3, 500);
  conta2.mensagemSaldo();
  conta3.mensagemSaldo();
  console.log(`
   --- F${ aplicacao_4.name } --- 
   `);
}
