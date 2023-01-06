export default abstract class Pessoa {
  protected cpf: string;
  protected nome: string;
  protected telefone: string;

  constructor(cpf: string, nome: string, telefone: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
  }

  public getCpf(): string {
    return this.cpf;
  }
  public setCpf(cpf: string) {
    this.cpf = cpf;
  }
  public getNome(): string {
    return this.nome;
  }
  public setNome(nome: string) {
    this.nome = nome;
  }
  public getTelefone(): string {
    return this.telefone;
  }
  public setTelefone(telefone: string) {
    this.telefone = telefone;
  }
}
