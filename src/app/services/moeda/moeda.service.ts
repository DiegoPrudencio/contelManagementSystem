import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoCotacao } from 'src/app/interfaces/infoCotacao';
import { InfoLocais } from 'src/app/interfaces/infoLocais';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  key='39fc87b4';
  url = "https://api.hgbrasil.com/finance?format=json-cors&fields=only_results,currencies,USD,EUR&key="+this.key;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  //Busca todas as reservas
  getCotacaoMoeda(): Observable<InfoCotacao> {
    return this.httpClient.get<any>(this.url)
  }
}
