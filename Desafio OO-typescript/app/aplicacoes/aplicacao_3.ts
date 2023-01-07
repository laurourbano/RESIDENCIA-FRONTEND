import Cliente from "../concretas/Cliente.js";
import ContaCorrente from "../concretas/ContaCorrente.js";

export function aplicacao_3(): void {
  const cliente1 = new Cliente(
    "100.000.000-00",
    "Euclides Cunha",
    "(41)99999-9999",
    true
  );
  const conta1 = new ContaCorrente("001", cliente1, 1_000);
  console.log(`
   --- I${ aplicacao_3.name } --- 
   `);

  conta1.depositar(100);
  conta1.depositar(100);
  conta1.depositar(100);
  conta1.sacar(50);
  conta1.mensagemSaldo();

  console.log(`
   --- F${ aplicacao_3.name } --- 
   `);
}
