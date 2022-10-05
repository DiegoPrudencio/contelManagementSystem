import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"; 

import { CaixaComponent } from './pages/caixaGeral/caixa/caixa.component';
import { CadastroDeTransacaoComponent } from './pages/cadastro-de-transacao/cadastro-de-transacao.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ReceitaComponent } from './pages/caixaGeral/receita/receita.component';
import { DespesaComponent } from './pages/caixaGeral/despesa/despesa.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // {path: 'menu/paineldecontrole', component: MenuComponent}, 
  // {path: 'menu/mapadereserva', component: MenuComponent}, 
  {path: 'caixaGeral/caixa', component: CaixaComponent}, 
  {path: 'caixaGeral/caixa/cadastroDeTransacao', component: CadastroDeTransacaoComponent},
  {path: 'caixaGeral/caixa/receita', component: ReceitaComponent}, 
  {path: 'caixaGeral/caixa/despesa', component: DespesaComponent}, 
]

@NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule {}