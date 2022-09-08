import { Component, OnInit } from '@angular/core';
import { Subcategoria } from 'src/app/models/subcategoria';
import { ServiceSubcategoriasService } from 'src/app/services/service-subcategorias.service';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css']
})
export class SubcategoriaComponent implements OnInit {
  subcategorias: Subcategoria[] = [];
  filtroDescripcion: String = "";
  filtroIdCategoria!: number;

  constructor(private servicioSubcategorias: ServiceSubcategoriasService) { }
  
  ngOnInit(): void {
    this.getSubcategorias();
  }

  getSubcategorias(queryParams: {}={}){
    this.servicioSubcategorias.getSubcategorias({like: 'S', ejemplo: JSON.stringify(queryParams)}).subscribe({
      next: (entity) => {
        //Ordenar lista por ID
        entity.lista.sort(this.compararIDs);
        this.subcategorias = entity.lista
      },
      error: () => console.log('no se pudieron conseguir las subcategorias')
    });
  }

  filtrarSubcategorias(){
    let params: any = {};
    if (this.filtroDescripcion!="")
      params["descripcion"] = this.filtroDescripcion;
    if (this.filtroIdCategoria!=null && this.filtroIdCategoria!=undefined){
      this.filtroIdCategoria = this.limpiarInputNumerica(this.filtroIdCategoria);
      console.log(this.filtroIdCategoria);
      params["idCategoria"] = {"idCategoria" : this.filtroIdCategoria};
    }
    this.getSubcategorias(params);
  }

  compararIDs(a: Subcategoria,b: Subcategoria){
    if ( a.idTipoProducto < b.idTipoProducto ) return -1;
    if ( a.idTipoProducto > b.idTipoProducto ) return 1;
    return 0;
  }

  limpiarInputNumerica(n: number){
    if (n<0)
      n=-n;
    n=Math.floor(n)
    return n;
  }

}
