export default class Cargo {
  private nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
  public getNome(): string {
    return this.nome;
  }
  public setNome(nome: string) {
    this.nome = nome;
  }
}
