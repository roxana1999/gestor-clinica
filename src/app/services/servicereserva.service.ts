import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { listareserva } from '../models/listaReserva';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ServicereservaService {
  private api: string ="https://equipoyosh.com/stock-nutrinatalia/reserva";
  constructor(private http: HttpClient ) { }

  getReserva(queryParams: {}={}): Observable<listareserva<Reserva>> {
    return this.http.get<listareserva<Reserva>>(this.api, {params: queryParams})
    //let headers = new HttpHeaders({'Content-Type': 'application/json'});
  }
  

}
