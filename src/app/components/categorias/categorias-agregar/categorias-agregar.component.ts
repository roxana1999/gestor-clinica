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
  constructor(private servicioCategorias : ServiceCategoriasService) { }

  ngOnInit(): void {
  }

  agregarCategoria(): void {
    this.servicioCategorias.agregarCategoria(this.categoria).subscribe(
      {
        next: () => this.mensaje='Agregado exitosamente', 
        error: (e) => console.log("error: "+e)
      }
    );
  }

}
