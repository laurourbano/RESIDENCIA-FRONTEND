import Cargo from "./Cargo.js";
import IUsuario from "./IUsuario.js";
import Pessoa from "./Pessoa.js";

export default class Funcionario extends Pessoa implements IUsuario {
  private cargo: Cargo;
  private cargos: Cargo[] = [];
  private salario: number;

  constructor(
    cpf: string,
    nome: string,
    telefone: string,
    cargo: Cargo,
    salario: number
  ) {
    super(cpf, nome, telefone);
    this.cargo = cargo;
    this.salario = salario;
  }
  public addCargo(cargo: Cargo): void {
    this.cargos.push(cargo);
  }

  public getCargo(): Cargo {
    return this.cargo;
  }
  public setCargo(cargo: Cargo) {
    this.cargo = cargo;
  }
  public getSalario(): number {
    return this.salario;
  }
  public setSalario(salario: number) {
    this.salario = salario;
  }

  //implementa método do IUsuario
  autenticaUsuario(): boolean {
    return true;
  }
}
