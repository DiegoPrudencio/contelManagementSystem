import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/interfaces/reserva';

@Injectable({
  providedIn: 'root'
})

export class IndicadorService {
  port = "8080";
  url = "http://localhost:" + this.port;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

    constructor(private httpClient: HttpClient) { }

  //Obtem as próximas chegadas
  getQntHospedesHospedados(dataAtual: String): Observable<Number>{
    return this.httpClient.get<Number>(this.url + "/reserva/painel-de-controle?qntHospedesDia="+ dataAtual);  
  }
  
  getCapacidadeTotalHotel(): Observable<Number>{
    return this.httpClient.get<Number>(this.url + "/quarto/capacidadeHotel")
  }

  getFinanceiroDiario(tipo:String, dataAtual: String): Observable<Number>{
    return this.httpClient.get<Number>(this.url + "/"+tipo+"/totalDia?" + dataAtual)
  }

  getDiariaMedia(diaSemana:Number, dataAtual: String): Observable<Number>{
    return this.httpClient.get<Number>(this.url + "/reserva/diariaMedia/"+diaSemana+"/"+dataAtual);
  }

  getAlteracoesReserva(consulta:String, dataAtual: String): Observable<Number>{
    return this.httpClient.get<Number>(this.url + "/reserva/painel-de-controle?" + consulta +"="+ dataAtual);
  }
}
