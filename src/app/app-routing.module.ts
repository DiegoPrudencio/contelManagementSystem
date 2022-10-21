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
<<<<<<< HEAD
import { CadastroDeReservasComponent } from './pages/cadastro-de-reservas/cadastro-de-reservas.component';
import { CadastroDeUnidadeHoteleiraComponent } from './pages/cadastro-de-unidade-hoteleira/cadastro-de-unidade-hoteleira.component';
=======
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
>>>>>>> 2cc07c6cfaa70f3036be2550bbff23c71c386ba1



const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: 'menu', component: MenuComponent},
  {path: 'painelDeControle', component: PainelControleComponent}, 
  {path: 'mapaDeReserva', component: MapaDeReservasComponent},
  {path: 'mapaDeReserva/cadastroDeReserva', component: CadastroDeReservasComponent}, 
  {path: 'mapaDeReserva/cadastroDeUH', component: CadastroDeUnidadeHoteleiraComponent}, 
  {path: 'caixaGeral/caixa', component: CaixaComponent}, 
  {path: 'caixaGeral/caixa/cadastroDeTransacao', component: CadastroDeTransacaoComponent},
  {path: 'caixaGeral/caixa/receita', component: ReceitaComponent}, 
  {path: 'caixaGeral/caixa/despesa', component: DespesaComponent}, 
  {path: 'configuracoes', component: ConfigComponent}
]

@NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule {}