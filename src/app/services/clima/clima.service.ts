import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoLocais } from 'src/app/interfaces/infoLocais';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  key='39fc87b4';
  url = "https://api.hgbrasil.com/weather?format=json-cors&fields=only_results,temp,city,time,date&key="+this.key+"&user_ip=remote"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  //Busca todas as reservas
  getCondicoesLocais(): Observable<InfoLocais> {
    return this.httpClient.get<InfoLocais>(this.url)
  }
}