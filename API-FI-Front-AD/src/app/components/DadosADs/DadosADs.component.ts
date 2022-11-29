import { Component, OnInit } from '@angular/core';
import { DadosADService } from '../../services/DadosAD.service'
import { DadosADModel } from '../../model/DadosADModel'
import { MatFormFieldModule} from '@angular/material/form-field';
import { IDadosAD } from '../../interfaces/IDadosAD'
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dadosADs',
  templateUrl: './dadosADs.component.html',
  styleUrls: ['./dadosADs.component.scss']
})

export class DadosADsComponent implements OnInit {
 
  
  columns: string[] = ['id', 'salario'];
  // origem dos dados
  dataSource!: MatTableDataSource<IDadosAD>;
  

  constructor(private dadosADSrv: DadosADService,
    private router: Router,
    private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.bind();
  }

  async bind() {
    console.log("inicio")
    const DadosAD = await this.dadosADSrv.GetAll();
    console.log ("----");
    console.log(DadosAD);
    console.log ("----");
    this.dataSource = new MatTableDataSource(DadosAD.data);    
  }
  

  async delete(dadosAD: DadosADModel): Promise<void> {
      const result = await this.dadosADSrv.delete(dadosAD.id);
      this.bind();     
      this.router.navigateByUrl('/DadosADs');      
  }
}
