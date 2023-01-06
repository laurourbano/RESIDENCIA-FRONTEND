export default class Debito {
  valor: number;
  data: Date;

  constructor(valor: number, data: Date) {
    this.valor = valor;
    this.data = data;
  }
  public getValor(): number {
    return this.valor;
  }
  public setValor(valor: number) {
    this.valor = valor;
  }
  public getData(): Date {
    return this.data;
  }
  public setData(data: Date) {
    this.data = data;
  }
}
