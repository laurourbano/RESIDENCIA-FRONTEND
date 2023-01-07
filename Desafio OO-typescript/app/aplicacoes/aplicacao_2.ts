import Cliente from "../concretas/Cliente.js";
import Endereco from "../concretas/Endereco.js";

export function aplicacao_2(): void {
  const cliente5 = new Cliente(
    "100.000.000-00",
    "Euclides Cunha",
    "(41)99999-9999",
    true
  );

  const endereco1 = new Endereco(
    "80.111-001",
    "rua a",
    "555",
    "casa",
    "Curitiba",
    "Paraná"
  );
  const endereco2 = new Endereco(
    "80.222-001",
    "rua b",
    "444",
    "casa",
    "Curitiba",
    "Paraná"
  );
  const endereco3 = new Endereco(
    "80.333-001",
    "rua c",
    "333",
    "casa",
    "Curitiba",
    "Paraná"
  );
  cliente5.addEndereco(endereco1);
  cliente5.addEndereco(endereco2);
  cliente5.addEndereco(endereco3);

  console.log(`
   --- I${ aplicacao_2.name } --- 
   `);

  console.log(`
${ cliente5.listarEnderecos() }
`);
  console.log(`
   --- F${ aplicacao_2.name } --- 
   `);
}
