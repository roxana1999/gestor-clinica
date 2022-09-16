import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Excepcion } from '../models/excepcion';
import { listaCategorias } from '../models/listaCategorias';

@Injectable({
  providedIn: 'root',
})
export class ExcepcionHorarioService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    usuario: 'usuario1',
  });
  private api: string =
    'https://equipoyosh.com/stock-nutrinatalia/horarioExcepcion/';

  constructor(private http: HttpClient) {}

  getHorariosExcepcion(
    queryParams: {} = {}
  ): Observable<listaCategorias<Excepcion>> {
    return this.http.get<listaCategorias<Excepcion>>(this.api, {
      params: queryParams,
    });
  }

  agregarExcepcion(excepcion: Excepcion): Observable<Excepcion> {
    return this.http.post<Excepcion>(this.api, excepcion, { headers: this.headers }).pipe(
      tap({
        next: (data) => {
          console.log('agregado ' + data);
        },
        error: (err) => console.log('error: ' + err),
      })
    );
  }
}
