import { Component, OnInit } from '@angular/core';
import { DadosADService } from '../../services/DadosAD.service'
import { DadosADModel } from '../../model/DadosADModel'
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import { IDadosAD } from '../../interfaces/IDadosAD'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dadosAD',
  templateUrl: './dadosAD.component.html',
  styleUrls: ['./dadosAD.component.scss']
})
export class DadosADComponent  implements OnInit {

  model: DadosADModel = new DadosADModel();

  constructor(
    private dadosADSrv: DadosADService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.dadosADSrv.GetById(id);
    this.model = result.data as DadosADModel;
  }

  async save(): Promise<void> {
    const result = await this.dadosADSrv.post(this.model);
    if (result.success) {
      this.router.navigateByUrl('/dadosAD');
    }
  }
}
