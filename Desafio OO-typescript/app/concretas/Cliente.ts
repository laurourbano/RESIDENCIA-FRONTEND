import Conta from "../abstratas/Conta.js";
import Endereco from "./Endereco.js";
import IUsuario from "../interfaces/IUsuario.js";
import Pessoa from "../abstratas/Pessoa.js";
export default class Cliente extends Pessoa implements IUsuario {
  private enderecos: Endereco[] = [];
  private contas: Conta[] = [];
  private vip: boolean;

  constructor(cpf: string, nome: string, telefone: string, vip: boolean) {
    super(cpf, nome, telefone);
    this.vip = vip;
  }
  public addConta(conta: Conta) {
    this.contas.push(conta);
  }
  public getVip(): boolean {
    return this.vip;
  }
  public setVip(vip: boolean) {
    this.vip = vip;
  }
  public addEndereco(endereco: Endereco): void {
    this.enderecos.push(endereco);
  }
  public listarEnderecos(): void {
    console.log(this.getNome());
    console.log(this.getCpf());

    for (const endereco of this.enderecos) {
      console.log(JSON.stringify(endereco));
    }
  }

  //autentica usuario
  public autenticaUsuario(): boolean {
    return true;
  }
}
