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

  constructor(private route: ActivatedRoute, private servicioCategorias: ServiceCategoriasService) { }

  ngOnInit(): void {
    this.idCategoria = this.route.snapshot.params['id'];
    console.log(this.idCategoria);
    this.servicioCategorias.getCategoriaPorId(this.idCategoria).subscribe({
      next: (entity) => {this.categoria = entity; this.descripcionAnterior = entity.descripcion},
      error: (e) => console.log('no se pudieron conseguir las categorias, error: '+e)
    }
     );
  }

  actualizarCategoria(): void { 
    this.servicioCategorias.actualizarCategoria(this.idCategoria, this.categoria).subscribe(
      {
        next: () => this.mensaje='Actualizado exitosamente', 
        error: (e) => console.log("error: "+e)
      }
    );
  }
}
