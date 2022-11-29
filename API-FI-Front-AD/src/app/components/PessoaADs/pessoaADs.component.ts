import { Component, OnInit } from '@angular/core';
import { IPessoaAD } from 'src/app/interfaces/IPessoaAD';
import { PessoaADService } from '../../services/PessoaAD.service'
import { PessoaADModel } from '../../model/PessoaADModel'
import { DadosADModel } from '../../model/DadosADModel'
import { MatFormFieldModule} from '@angular/material/form-field';
import { IDadosAD } from '../../interfaces/IDadosAD'
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoaADs',
  templateUrl: './pessoaADs.component.html',
  styleUrls: ['./pessoaADs.component.scss']
})
export class PessoaADsComponent implements OnInit {
 
  displayedColumns: string[] = [ 'Editar', 'id', 'nome', 'cpf', 'email', 'telefone','idade','sexo','cargo', 'Excluir'];
  // origem dos dados
  dataSource!: MatTableDataSource<IPessoaAD>;
  

  constructor(private pessoaADsSrv: PessoaADService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.bind();
  }

  async bind() {
    console.log("inicio")
    const pessoaADs = await this.pessoaADsSrv.GetAll();
    console.log ("----");
    console.log(pessoaADs);
    console.log ("----");
    this.dataSource = new MatTableDataSource(pessoaADs.data);    
  }

  async delete(pessoaAD: PessoaADModel): Promise<void> {
    const result = await this.pessoaADsSrv.delete(pessoaAD.id);
    this.bind();     
    this.router.navigateByUrl('/pessoaADs');      
}
}
