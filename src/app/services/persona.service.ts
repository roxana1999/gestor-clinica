import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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

  agregarPersona(c: Persona): Observable<Persona> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    return this.http
      .post<Persona>(this.api, c, {headers: headers})
      .pipe(
        tap(
          {
            next: data => {console.log('agregado '+data)},
            error: err => console.log("error: "+err)
          }
        )
      );
  }

  getPersonaPorId(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.api+'/'+id);
  }

  actualizarPersona(persona: Persona): Observable<Persona> {
    return this.http
      .put<Persona>(this.api, persona)
      .pipe(
        tap(
          {
            next: data => {console.log('actualizado '+data)},
            error: err => console.log("error: "+err)
          }
        )
      );
  }
}
