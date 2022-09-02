import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { ServiceCategoriasService } from 'src/app/services/service-categorias.service';

@Component({
  selector: 'app-categorias-agregar',
  templateUrl: './categorias-agregar.component.html',
  styleUrls: ['./categorias-agregar.component.css']
})
export class CategoriasAgregarComponent implements OnInit {
  categoria: Categoria = new Categoria();
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;

  constructor(private servicioCategorias : ServiceCategoriasService) { }

  ngOnInit(): void {
  }

  agregarCategoria(): void {
    this.error = false;
    this.servicioCategorias.agregarCategoria(this.categoria).subscribe(
      {
        next: () => {this.success=true; this.mensaje='Categoría agregada exitosamente.'}, 
        error: (e) => {this.error=true; this.mensaje='Ocurrió un error.'}
      }
    );
  }

}
