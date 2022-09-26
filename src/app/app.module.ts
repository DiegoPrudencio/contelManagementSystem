import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FechamentoContaComponent } from './pages/fechamento-conta/fechamento-conta.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelControleComponent,
    FechamentoContaComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
