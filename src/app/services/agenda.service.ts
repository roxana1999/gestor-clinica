import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Agenda } from '../models/agenda';
import { listaCategorias } from '../models/listaCategorias';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    usuario: 'usuario1',
  });
  private api: string =
    'https://equipoyosh.com/stock-nutrinatalia/personaHorarioAgenda/';
  constructor(private http: HttpClient) {}

  getAgendas(queryParams: {} = {}): Observable<listaCategorias<Agenda>> {
    return this.http.get<listaCategorias<Agenda>>(this.api, {
      params: queryParams,
    });
  }

  agregarAgenda(c: Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.api, c, { headers: this.headers }).pipe(
      tap({
        next: (data) => {
          console.log('agregado ' + data);
        },
        error: (err) => console.log('error: ' + err),
      })
    );
  }
}
