import Cargo from "../concretas/Cargo";
import Funcionario from "../concretas/Funcionario";

export function aplicacao_1(): void {
  const atendente = new Cargo("Atendente");
  const gerente = new Cargo("Gerente");
  const funcionario1 = new Funcionario(
    "000.000.000-01",
    "Flavio",
    "(41)97777-9999",
    atendente,
    2000
  );
  const funcionario2 = new Funcionario(
    "111.111.111-00",
    "Joel",
    "(41)96666-9999",
    gerente,
    5000
  );
  console.log(`
   --- I${ aplicacao_1.name } --- 
   `);
  console.log(`
Nome: ${ funcionario1.getNome() }
Cargo: ${ funcionario1.getCargo().getNome() }
Salário: ${ funcionario1.getSalario().toFixed(2) }
`);

  console.log(`
Nome: ${ funcionario2.getNome() }
Cargo: ${ funcionario2.getCargo().getNome() }
Salário: ${ funcionario2.getSalario().toFixed(2) }
`);
  console.log(`
   --- F${ aplicacao_1.name } --- 
   `);

}
