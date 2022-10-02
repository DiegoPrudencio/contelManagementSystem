import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelControleComponent } from './pages/painel-controle/painel-controle.component';
import { ConfigComponent } from './pages/config/config.component';
import { ConfigHotelComponent } from './pages/config-hotel/config-hotel.component';
import { ConfigDiariaComponent } from './pages/config-diaria/config-diaria.component';
import { ConfigUsuarioComponent } from './pages/config-usuario/config-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PainelControleComponent,
    ConfigComponent,
    ConfigHotelComponent,
    ConfigDiariaComponent,
    ConfigUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
