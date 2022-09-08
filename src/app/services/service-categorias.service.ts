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
  private api: string ="https://equipoyosh.com/stock-nutrinatalia/categoria/";


  constructor(private http: HttpClient) { }
  getCategorias(queryParams: {}={}): Observable<listaCategorias<Categoria>> {
    return this.http.get<listaCategorias<Categoria>>(this.api, {params: queryParams});
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

  actualizarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http
      .put<Categoria>(this.api, categoria)
      .pipe(
        tap(
          {
            next: data => {console.log('actualizado '+data)},
            error: err => console.log("error: "+err)
          }
        )
      );
  }

  eliminarCategoria(id: number): Observable<Object> {
    console.log(this.api+'/'+id);
    return this.http.delete(this.api+'/'+id);
  }

   
}
