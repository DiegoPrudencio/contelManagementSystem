import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"; 

import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { MapaDeReservasComponent } from './pages/mapa-de-reservas/mapa-de-reservas.component';
import { CaixaComponent } from './pages/caixaGeral/caixa/caixa.component';
import { CadastroDeTransacaoComponent } from './pages/cadastro-de-transacao/cadastro-de-transacao.component';
import { ReceitaComponent } from './pages/caixaGeral/receita/receita.component';
import { DespesaComponent } from './pages/caixaGeral/despesa/despesa.component';
import { ConfigComponent } from './pages/config/config.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  // {path: '/', component: LoginComponent}, 
  {path: 'menu', component: MenuComponent},
  {path: 'menu/painelDeControle', component: PainelControleComponent}, 
  {path: 'menu/mapaDeReserva', component: MapaDeReservasComponent}, 
  {path: 'menu/caixaGeral/caixa', component: CaixaComponent}, 
  {path: 'menu/caixaGeral/caixa/cadastroDeTransacao', component: CadastroDeTransacaoComponent},
  {path: 'menu/caixaGeral/caixa/receita', component: ReceitaComponent}, 
  {path: 'menu/caixaGeral/caixa/despesa', component: DespesaComponent}, 
  {path: 'menu/configuracoes', component: ConfigComponent}
]

@NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule {}