import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { ServiceCategoriasService } from 'src/app/services/service-categorias.service';

@Component({
  selector: 'app-categorias-eliminar',
  templateUrl: './categorias-eliminar.component.html',
  styleUrls: ['./categorias-eliminar.component.css']
})
export class CategoriasEliminarComponent implements OnInit {
  idCategoria!: number;
  categoria: Categoria = new Categoria();
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;
  
  constructor(private route: ActivatedRoute, private servicioCategorias: ServiceCategoriasService) { }

  ngOnInit(): void {
    this.idCategoria = this.route.snapshot.params['id'];
    console.log(this.idCategoria);
    this.servicioCategorias.getCategoriaPorId(this.idCategoria).subscribe({
      next: (entity) => this.categoria = entity,
      error: (e) => console.log('no se pudo conseguir la categoria, error: '+e)
    });
  }

  eliminarCategoria(): void { 
    this.error = false;
    this.servicioCategorias.eliminarCategoria(this.idCategoria).subscribe(
      {
        next: () => {this.success=true; this.mensaje='Categoría eliminada exitosamente.'}, 
        error: () => {this.error=true; this.mensaje='Ocurrió un error.'}
      }
    );
  }

}
