import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentacionProducto } from 'src/app/models/presentacionproducto';
import { Subcategoria } from 'src/app/models/subcategoria';
import { PresentacionproductoService } from 'src/app/services/presentacionproducto.service';
import { ServiceSubcategoriasService } from 'src/app/services/service-subcategorias.service';

@Component({
  selector: 'app-presentacion-producto',
  templateUrl: './presentacion-producto.component.html',
  styleUrls: ['./presentacion-producto.component.css']
})
export class PresentacionProductoComponent implements OnInit {
  nombreSelect: any;
  listaPresentacion: PresentacionProducto [] = [];
  presentacionProductoSelec: PresentacionProducto = new PresentacionProducto();
  mensaje: string = "";
  presProductSelec: PresentacionProducto = new PresentacionProducto();
  subCategoriaSelec: Subcategoria = new Subcategoria();
  subCategoriaSelecName: Subcategoria = new Subcategoria();
  id : number = 0;
  subcategorias: Subcategoria [] = [];
  presentaciondeProductosResultadosSubCategoria: PresentacionProducto [] = [];
  presentaciondeProductosResultadosNombre: PresentacionProducto [] = [];
  presentaciondeProductosResultados: PresentacionProducto [] = [];
  nombres: string[]=[];
  band: boolean=false;
  band2: boolean=false;
  clickBuscar: boolean = false;
  public page: number =1;

  async ngOnInit(): Promise<void>{
    const filtro = {
      idProducto: {
        idTipoProducto : {
          idTipoProducto: 38
        }
        
      }
    }
    
      this.servicioPresentacionproducto.getPresentacionProductos().subscribe(
        entity => this.listaPresentacion = entity.lista,
        error => console.log("No se pudo acceder a la lista de Categorias")
      );

      this.servicioSubCategoria.getSubcategorias().subscribe(
        entity => this.subcategorias = entity.lista,
        error => console.log("No se pudo acceder a la lista de Categorias")
      );
      
      for (var servicio in this.listaPresentacion){
        if (this.nombres.includes( this.listaPresentacion[servicio].nombre )==false){
          this.nombres[servicio]=this.listaPresentacion[servicio].nombre;
        }
      }
  }


  async Buscar(active: string, direction: string, desdeSort: boolean): Promise<void>{

    if(!desdeSort){
      this.clickBuscar = true;
    }

    let params;
    let ejemplo;
    /**nombreSelect utilizo en el html de presentacion-producto */
    if(this.subCategoriaSelec.idTipoProducto != undefined && this.nombreSelect != undefined){
      ejemplo = {
        idProducto: {
          idTipoProducto : {
            idTipoProducto: this.subCategoriaSelec.idTipoProducto
          }
        },
        nombre: this.nombreSelect
      }
    }

  }
  constructor(private servicioPresentacionproducto: PresentacionproductoService, private route: ActivatedRoute, private servicioSubCategoria: ServiceSubcategoriasService) { }

 

}
