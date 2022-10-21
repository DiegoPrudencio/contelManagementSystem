import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../../interfaces/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  port = "8080"
  url = "http://localhost:" + this.port + "/reserva"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  //Busca todas as reservas
  getReserva(): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(this.url)
  }

  //Obtem as próximas chegadas
  getCheckInOut(consulta:String, dataAtual: String): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>(this.url + "/painel-de-controle/check?" + consulta +"="+ dataAtual);
  }
}
