import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { ServiceCategoriasService } from '../../services/service-categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  mensaje!: string;
  filtroDescripcion: String = "";

  constructor(private servicioCategorias: ServiceCategoriasService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(queryParams: {}={}){
    this.mensaje="";
    this.servicioCategorias.getCategorias({like: 'S', ejemplo: JSON.stringify(queryParams)}).subscribe({
      next: (entity) => {
        //Ordenar lista por ID
        entity.lista.sort(this.compararIDs);
        this.categorias = entity.lista; 
        if(this.categorias.length==0)
          this.mensaje="No hay resultados." 
      },
      error: (e) => this.mensaje = e
    });
  }

  filtrarCategorias(){
    let params: any = {};
    if (this.filtroDescripcion!="")
      params["descripcion"] = this.filtroDescripcion;
    console.log(params);
    this.getCategorias(params);
  }

  compararIDs(a: Categoria, b: Categoria){
    if ( a.idCategoria < b.idCategoria ) return -1;
    if ( a.idCategoria > b.idCategoria ) return 1;
    return 0;
  }

  


}
