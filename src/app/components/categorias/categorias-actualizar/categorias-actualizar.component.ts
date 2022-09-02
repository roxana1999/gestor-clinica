import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { ServiceCategoriasService } from 'src/app/services/service-categorias.service';

@Component({
  selector: 'app-categorias-actualizar',
  templateUrl: './categorias-actualizar.component.html',
  styleUrls: ['./categorias-actualizar.component.css']
})
export class CategoriasActualizarComponent implements OnInit {
  idCategoria!: number;
  categoria: Categoria = new Categoria();
  mensaje: string = "";
  descripcionAnterior: string = "";
  success: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private servicioCategorias: ServiceCategoriasService) { }

  ngOnInit(): void {
    this.idCategoria = this.route.snapshot.params['id'];
    console.log(this.idCategoria);
    this.servicioCategorias.getCategoriaPorId(this.idCategoria).subscribe({
      next: (entity) => {this.categoria = entity; this.descripcionAnterior = entity.descripcion},
      error: (e) => console.log('no se pudo conseguir la categoria, error: '+e)
    }
     );
  }

  actualizarCategoria(): void { 
    this.error = false;
    this.servicioCategorias.actualizarCategoria(this.idCategoria, this.categoria).subscribe(
      {
        next: () => {this.success=true; this.mensaje='Categoría actualizada exitosamente.'}, 
        error: () => {this.error=true; this.mensaje='Ocurrió un error.'}
      }
    );
  }
}
