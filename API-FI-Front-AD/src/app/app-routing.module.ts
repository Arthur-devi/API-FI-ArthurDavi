import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosADsComponent } from './components/DadosADs/DadosADs.component';
import { QuestionarioComponent } from './components/questionario/questionario.component';
import { DadosADComponent } from './components/DadosAD/DadosAD.component';
import { PessoaADComponent } from './components/PessoaAD/PessoaAD.component';
import { PessoaADsComponent } from './components/PessoaADs/pessoaADs.component';
const routes: Routes = [
  {path:"dadosADs", component:DadosADsComponent},
  {path:"pessoaADs", component:PessoaADsComponent},
  {path:"questoes", component: QuestionarioComponent},
  { path:"dadosAD", component: DadosADComponent},
  { path:"DadosAD/:id", component: DadosADComponent},
  { path:"pessoaAD", component: PessoaADComponent},
  { path:"PessoaAD/:id", component: PessoaADComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
