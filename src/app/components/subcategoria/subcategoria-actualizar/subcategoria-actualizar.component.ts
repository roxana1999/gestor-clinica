import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subcategoria } from 'src/app/models/subcategoria';
import { ServiceSubcategoriasService } from 'src/app/services/service-subcategorias.service';

@Component({
  selector: 'app-subcategoria-actualizar',
  templateUrl: './subcategoria-actualizar.component.html',
  styleUrls: ['./subcategoria-actualizar.component.css']
})
export class SubcategoriaActualizarComponent implements OnInit {
  idSubcategoria!: number;
  subcategoria: Subcategoria = new Subcategoria();
  mensaje: string = "";
  descripcionAnterior: string = "";
  success: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private servicioSubcategorias: ServiceSubcategoriasService) { }

  ngOnInit(): void {
    this.idSubcategoria = this.route.snapshot.params['id'];
    console.log(this.idSubcategoria);
    this.servicioSubcategorias.getSubcategoriaPorId(this.idSubcategoria).subscribe({
      next: (entity) => { this.subcategoria = entity; this.descripcionAnterior = entity.descripcion },
      error: (e) => console.log('no se pudo conseguir la subcategoria, error: ' + e)
    }
    );
  }

  actualizarSubcategoria(): void {
    this.servicioSubcategorias.actualizarSubcategoria(this.idSubcategoria, this.subcategoria).subscribe(
      {
        next: () => {this.success = true; this.mensaje = 'Subcategoría modificada exitosamente.'},
        error: (e) => {this.error = true, this.mensaje = 'Ocurrió un error.'}
      }
    );
  }
}