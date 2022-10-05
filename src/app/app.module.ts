import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CaixaComponent } from './pages/caixaGeral/caixa/caixa.component';
import { CadastroDeTransacaoComponent } from './pages/cadastro-de-transacao/cadastro-de-transacao.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { ReceitaComponent } from './pages/caixaGeral/receita/receita.component';
import { DespesaComponent } from './pages/caixaGeral/despesa/despesa.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CaixaComponent,
    CadastroDeTransacaoComponent,
    MenuComponent,
    ReceitaComponent,
    DespesaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent, 
    CaixaComponent,
    MenuComponent,
    ReceitaComponent,
    DespesaComponent
  ]
})
export class AppModule { }
