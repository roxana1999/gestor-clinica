import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subcategoria } from 'src/app/models/subcategoria';
import { ServiceSubcategoriasService } from 'src/app/services/service-subcategorias.service';

@Component({
  selector: 'app-subcategoria-eliminar',
  templateUrl: './subcategoria-eliminar.component.html',
  styleUrls: ['./subcategoria-eliminar.component.css']
})
export class SubcategoriaEliminarComponent implements OnInit {
  idSubcategoria!: number;
  subcategoria: Subcategoria = new Subcategoria();
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private servicioSubcategorias: ServiceSubcategoriasService) { }

  ngOnInit(): void {
    this.idSubcategoria = this.route.snapshot.params['id'];
    console.log(this.idSubcategoria);
    this.servicioSubcategorias.getSubcategoriaPorId(this.idSubcategoria).subscribe({
      next: (entity) => this.subcategoria = entity,
      error: (e) => console.log('no se pudo conseguir la subcategoria, error: '+e)
    });
  }

  eliminarSubcategoria(): void { 
    this.error = false;
    this.servicioSubcategorias.eliminarSubcategoria(this.idSubcategoria).subscribe(
      {
        next: () => {this.success=true; this.mensaje='Subcategoría eliminada exitosamente.'}, 
        error: () => {this.error=true; this.mensaje='Ocurrió un error.'}
      }
    );
  }

}
