import { Component, OnInit } from '@angular/core';
import { PessoaADModel } from 'src/app/model/PessoaADModel';
import { PessoaADService } from '../../services/PessoaAD.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoaAD',
  templateUrl: './pessoaAD.component.html',
  styleUrls: ['./pessoaAD.component.scss']
})
export class PessoaADComponent implements OnInit {
  
  model: PessoaADModel = new PessoaADModel();
    
  constructor(
    private pessoaADSrv: PessoaADService,
    private router: Router,
    private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.pessoaADSrv.GetById(id);
    this.model = result.data as PessoaADModel;
  }
  async save(): Promise<void> {
    const result = await this.pessoaADSrv.post(this.model);
    if (result.success) {
      this.router.navigateByUrl('/pessoaADs');
    }
  }
}
