import { BaseModel } from './baseModel';

export class PessoaADModel extends BaseModel {  
  nome: string | undefined;
  cpf: string | undefined;
  email: string | undefined;
  telefone: string | undefined;
  idade:  number | undefined;
  sexo:  boolean | undefined;
  cargo:  number | undefined;
}