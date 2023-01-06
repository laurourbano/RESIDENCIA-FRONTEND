export default class Credito {
  private valor: number;
  private data: Date;
  static creditos: any;

  constructor(valor: number, data: Date) {
    this.valor = valor;
    this.data = data;
  }
  public getValor(): number {
    return this.valor;
  }
  public setValor(valor: number) {
    this.valor = valor;
    this.getData().toUTCString();
  }
  public getData(): Date {
    return this.data;
  }
  public setData(data: Date) {
    this.data = data;
  }
}
