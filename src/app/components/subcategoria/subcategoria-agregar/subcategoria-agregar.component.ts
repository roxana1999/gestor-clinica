import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Subcategoria } from 'src/app/models/subcategoria';
import { ServiceCategoriasService } from 'src/app/services/service-categorias.service';
import { ServiceSubcategoriasService } from 'src/app/services/service-subcategorias.service';

@Component({
  selector: 'app-subcategoria-agregar',
  templateUrl: './subcategoria-agregar.component.html',
  styleUrls: ['./subcategoria-agregar.component.css']
})
export class SubcategoriaAgregarComponent implements OnInit {
  idCategoria!: number;
  categoria: Categoria = new Categoria();
  subcategoria: Subcategoria = new Subcategoria();
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private servicioSubcategorias : ServiceSubcategoriasService, private servicioCategorias: ServiceCategoriasService) { }

  ngOnInit(): void {
    this.idCategoria = this.route.snapshot.params['id'];
    this.subcategoria.idCategoria={"idCategoria":this.idCategoria};
    console.log(this.subcategoria.idCategoria.idCategoria);
    this.servicioCategorias.getCategoriaPorId(this.idCategoria).subscribe({
      next: (entity) => this.categoria = entity,
      error: (e) => console.log('no se pudo conseguir la categoria, error: '+e)
    });
  }

  agregarSubcategoria(): void {
    this.servicioSubcategorias.agregarSubcategoria(this.subcategoria).subscribe(
      {
        next: () => {this.success=true; this.mensaje='Subcategoría creada exitosamente.'}, 
        error: (e) => {this.error=true; this.mensaje='Ha ocurrido un error '+e}
      }
    );
  }

}
