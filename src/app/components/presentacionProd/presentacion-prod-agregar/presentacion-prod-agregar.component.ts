import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentacionProducto } from 'src/app/models/presentacionProducto';
import { Subcategoria } from 'src/app/models/subcategoria';
import { PresentacionProdService } from 'src/app/services/presentacion-prod.service';
import { ServiceSubcategoriasService } from 'src/app/services/service-subcategorias.service';

@Component({
  selector: 'app-presentacion-prod-agregar',
  templateUrl: './presentacion-prod-agregar.component.html',
  styleUrls: ['./presentacion-prod-agregar.component.css']
})
export class PresentacionProdAgregarComponent implements OnInit {
  idSubcategoria!: number;
  idProducto!: number;
  subcategoria: Subcategoria = new Subcategoria();
  presentacionProducto: PresentacionProducto = new PresentacionProducto();
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private servicioSubcategorias : ServiceSubcategoriasService, 
    private servicioPresentacionProducto: PresentacionProdService ) { }

  ngOnInit(): void {
    this.idSubcategoria = this.route.snapshot.params['id'];
    this.servicioSubcategorias.getSubcategoriaPorId(this.idSubcategoria).subscribe({
      next: (subcategoria_obtenida) => this.subcategoria = subcategoria_obtenida,
      error: (e) => console.log('no se pudo conseguir la subcategoría, error: '+e)
    });
    
    let params : any = {};
    params["ejemplo"]=JSON.stringify({"idTipoProducto": {"idTipoProducto": this.idSubcategoria}});
    this.servicioPresentacionProducto.getIdProducto(params).subscribe(
      {
        next: (listaProductos) => {
          this.idProducto = listaProductos.lista[0].idProducto;
          this.presentacionProducto.idProducto={ idProducto: this.idProducto, idTipoProducto: {idTipoProducto: this.idSubcategoria} };
        },
        error: (e) => console.log("Ocurrió un error al traer el ID del producto")
      }
    )    
  }

  agregarPresentacionProducto(): void {
    this.error = false;
    this.servicioPresentacionProducto.agregarPresentacionProducto(this.presentacionProducto).subscribe(
      {
        next: () => {this.success=true; this.mensaje='Servicio creado exitosamente.'}, 
        error: (e) => {this.error=true; this.mensaje='Ha ocurrido un error. '+e.message}
      }
    );
  }
}
