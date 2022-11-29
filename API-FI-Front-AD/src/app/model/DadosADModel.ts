import { BaseModel } from './baseModel';

export class DadosADModel extends BaseModel {  
  salario: string | undefined;  
  dividas: string| undefined;
  renda: number | undefined;
  emprestimos: number | undefined;
}