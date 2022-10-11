import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from "ngx-mask";
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MapaDeReservasComponent } from './pages/mapa-de-reservas/mapa-de-reservas.component';
import { CadastroDeReservasComponent } from './pages/cadastro-de-reservas/cadastro-de-reservas.component';
import { CadastroDeUnidadeHoteleiraComponent } from './pages/cadastro-de-unidade-hoteleira/cadastro-de-unidade-hoteleira.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { ConfigComponent } from './pages/config/config.component';
import { ConfigHotelComponent } from './pages/config-hotel/config-hotel.component';
import { ConfigDiariaComponent } from './pages/config-diaria/config-diaria.component';
import { ConfigUsuarioComponent } from './pages/config-usuario/config-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FechamentoContaComponent } from './pages/fechamento-conta/fechamento-conta.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CurrencyMaskModule } from 'ng2-currency-mask';
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
    PainelControleComponent,
    ConfigComponent,
    ConfigHotelComponent,
    ConfigDiariaComponent,
    ConfigUsuarioComponent,
    MapaDeReservasComponent,
    CadastroDeReservasComponent,
    CadastroDeUnidadeHoteleiraComponent,
    FechamentoContaComponent,
    MenuComponent,
    CadastroDeTransacaoComponent,
    CaixaComponent,
    DespesaComponent,
    ReceitaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
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

