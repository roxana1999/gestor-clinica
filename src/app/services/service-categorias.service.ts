import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Categoria } from '../models/categoria';
import { listaCategorias } from '../models/listaCategorias';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoriasService {
  private api: string ="https://equipoyosh.com/stock-nutrinatalia/categoria";


  constructor(private http: HttpClient) { }
  getCategorias(): Observable<listaCategorias<Categoria>> {
    return this.http.get<listaCategorias<Categoria>>(this.api);
  }

  getCategoriaPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.api+'/'+id);
  }

  agregarCategoria(c: Categoria): Observable<Categoria> {
    return this.http
      .post<Categoria>(this.api, c)
      .pipe(
        tap(
          {
            next: data => {console.log('agregado '+data)},
            error: err => console.log("error: "+err)
          }
        )
      );
  }

  actualizarCategoria(id: number, categoria: Categoria): Observable<Categoria> {
    let url = this.api
    console.log(url)
    return this.http
      .put<Categoria>(url, categoria)
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
