import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaCategorias } from '../models/listaCategorias';
import { Subcategoria } from '../models/subcategoria';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceSubcategoriasService {
  private api: string ="https://equipoyosh.com/stock-nutrinatalia/tipoProducto";
  constructor(private http: HttpClient) { }

  getSubcategorias(): Observable<listaCategorias<Subcategoria>> {
    return this.http.get<listaCategorias<Subcategoria>>(this.api);
  }

  getSubcategoriaPorId(id: number): Observable<Subcategoria> {
    return this.http.get<Subcategoria>(this.api+'/'+id);
  }

  agregarSubcategoria(sub: Subcategoria): Observable<Subcategoria> {
    return this.http
      .post<Subcategoria>(this.api, sub)
      .pipe(
        tap(
          {
            next: data => {console.log('agregado '+data)},
            error: err => console.log("error: "+err)
          }
        )
      );
  }

  actualizarSubcategoria(id: number, subcategoria: Subcategoria): Observable<Subcategoria> {
    let url = this.api
    console.log(url)
    return this.http
      .put<Subcategoria>(url, subcategoria)
      .pipe(
        tap(
          {
            next: data => {console.log('actualizado '+data)},
            error: err => console.log("error: "+err)
          }
        )
      );
  }

  eliminarSubcategoria(id: number): Observable<Object> {
    let url = this.api+'/'+id;
    console.log(url);
    return this.http.delete(url);
  }
}
