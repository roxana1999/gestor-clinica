import { Component, OnInit } from '@angular/core';
import { PresentacionProducto } from 'src/app/models/presentacionProducto';
import { PresentacionProdService } from 'src/app/services/presentacion-prod.service';

@Component({
  selector: 'app-presentacion-prod-listar',
  templateUrl: './presentacion-prod-listar.component.html',
  styleUrls: ['./presentacion-prod-listar.component.css']
})
export class PresentacionProdListarComponent implements OnInit {
  presentaciones: PresentacionProducto[] = [];
  mensaje!: string;
  filtroNombre!: string;
  filtroIdTipoProducto!: number;

  constructor(private servicioPresentacionProd:PresentacionProdService) { }

  ngOnInit(): void {
    this.getPresentaciones();
  }

  getPresentaciones(queryParams: {}={}){
    this.mensaje="";
    this.servicioPresentacionProd.getPresentacionProductos(queryParams).subscribe({
      next: (entity) => {
        this.presentaciones = entity.lista;
        if (this.presentaciones.length==0)
          this.mensaje="No hay resultados."
      },
      error: (e) => this.mensaje = e
    });
  }

  filtrarPresentaciones(){
    let params: any = {};
    if (this.filtroNombre!=undefined){
      params["like"] = "S";
      params["ejemplo"] = JSON.stringify({"nombre":this.filtroNombre});
    }
    this.getPresentaciones(params);
  }

  filtrarPorIdTipoProducto(){
    let params: any = {};
    if (this.filtroIdTipoProducto!=undefined && this.filtroIdTipoProducto!=null){
      console.log("Entró")
      params["ejemplo"] = JSON.stringify({"idProducto":{"idTipoProducto":{"idTipoProducto":this.filtroIdTipoProducto}}});
    }
    this.getPresentaciones(params);
  }
}
