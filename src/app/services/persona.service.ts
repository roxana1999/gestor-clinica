import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaDatos } from '../models/listaDatos';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private api: string ="https://equipoyosh.com/stock-nutrinatalia/persona/";
  constructor(private http: HttpClient) { }

  getPersonas(queryParams: {}={}): Observable<listaDatos<Persona>> {
    return this.http.get<listaDatos<Persona>>(this.api, {params: queryParams});
  }
}
