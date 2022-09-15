import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listadatos } from '../models/datos';
import { PresentacionProducto } from '../models/presentacionproducto';
import { tap } from 'rxjs/operators';
import { Subcategoria } from '../models/subcategoria';
import { Producto } from '../models/producto';
import { ExistenciaProducto } from '../models/existenciaProducto';

@Injectable({
  providedIn: 'root'
})
export class PresentacionproductoService {
  status: string="";
  private api: string ="https://equipoyosh.com/stock-nutrinatalia/presentacionProducto";
  constructor(private http: HttpClient) { }

  getPresentacionProductos(queryParams: {}={}): Observable<listadatos<PresentacionProducto>> {
    return this.http.get<listadatos<PresentacionProducto>>(this.api, {params: queryParams});
  }

  
 /* getPresentacionProductosP(queryParams: any): Observable<listadatos<PresentacionProducto>> {
    return this.http.get<listadatos<PresentacionProducto>>(this.api, {params: queryParams});
  }*/

  getPresentacion(idP: number): Observable<PresentacionProducto> {
    return this.http.get<PresentacionProducto>(this.api+'/'+idP);
  }

  headers = new HttpHeaders({ "Content-Type": "application/json" , "usuario": "usuario2" });
  postPresentacionProductos(body: any): Observable<PresentacionProducto>{
    return this.http.post<PresentacionProducto>(this.api, body,{headers: this.headers}).pipe(
      tap( // Log the result or error
        data => console.log('agregado '+data),
        error => console.log("error: "+error)
      )
    );
  }

  getPresentacionProductoSubCategoria(idP:number): Observable<listadatos<PresentacionProducto>> {
    const filtro = {
      idProducto: {
        idTipoProducto : {
          idTipoProducto: idP
        }
        
      }
    }
    const ejemplo = JSON.stringify(filtro)
    return this.http.get<listadatos<PresentacionProducto>>(this.api, {params:{ejemplo}});
  }

  getPresentacionProductoSubCategoria2(nameP:string): Observable<listadatos<PresentacionProducto>> {
    const filtro = {
      nombre: nameP

    }
    const ejemplo = JSON.stringify(filtro)
    return this.http.get<listadatos<PresentacionProducto>>(this.api, {params:{ejemplo}});
  }




  getsubcategorias(): Observable<listadatos<Subcategoria>> {
    return this.http.get<listadatos<Subcategoria>>(this.api);
  }

  deletePresentacionProducto(id: number): Observable<{}>{
    return this.http.delete(this.api+'/'+id);
  }

  putPresentacionProducto(body: any): Observable<PresentacionProducto>{
    return this.http.put<PresentacionProducto>(this.api, body,{headers: this.headers}).pipe(
      tap( // Log the result or error
        data => console.log('editado '+data),
        error => console.log("error: "+error)
      )
    );

  }

  private api1: string ="https://equipoyosh.com/stock-nutrinatalia/producto";
  getProductos(): Observable<listadatos<Producto>> {
    return this.http.get<listadatos<Producto>>(this.api1);
  }

  private api2: string ="https://equipoyosh.com/stock-nutrinatalia/existenciaProducto";
  getExistenciaproductos(): Observable<listadatos<ExistenciaProducto>> {
    return this.http.get<listadatos<ExistenciaProducto>>(this.api2);
  }


  getPresentacionProducto(idP:number): Observable<PresentacionProducto> {
    
    return this.http.get<PresentacionProducto>(this.api+'/'+idP);
  }
}
