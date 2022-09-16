import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { listaDatos } from '../models/listaDatos';
import { PresentacionProducto } from '../models/presentacionProducto';

@Injectable({
  providedIn: 'root'
})
export class PresentacionProdService {
  private api: string ="https://equipoyosh.com/stock-nutrinatalia/presentacionProducto/";
  
  constructor(private http:HttpClient) { }

  getPresentacionProductos(queryParams: {}={}): Observable<listaDatos<PresentacionProducto>> {
    return this.http.get<listaDatos<PresentacionProducto>>(this.api, {params: queryParams});
  }

  agregarPresentacionProducto(c: PresentacionProducto): Observable<PresentacionProducto> {
    //let headers = new HttpHeaders({
      //'Content-Type': 'application/json'});
    return this.http
      //.post<PresentacionProducto>(this.api, c, {headers: headers})
      .post<PresentacionProducto>(this.api, c)
      .pipe(
        tap(
          {
            next: data => {console.log('agregado '+data)},
            error: err => console.log("error: "+err)
          }
        )
      );
  }

  getPresentacionProductoPorId(id: number): Observable<PresentacionProducto> {
    return this.http.get<PresentacionProducto>(this.api+'/'+id);
  }

  actualizarPresentacionProducto(PresentacionProducto: PresentacionProducto): Observable<PresentacionProducto> {
    return this.http
      .put<PresentacionProducto>(this.api, PresentacionProducto)
      .pipe(
        tap(
          {
            next: data => {console.log('actualizado '+data)},
            error: err => console.log("error: "+err)
          }
        )
      );
  }

  eliminarPresentacionProducto(id: number): Observable<Object> {
    console.log(this.api+'/'+id);
    return this.http.delete(this.api+'/'+id);
  }
}
