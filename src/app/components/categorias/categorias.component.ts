import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria';
import { ServiceCategoriasService } from '../../services/service-categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];
  constructor(private servicioCategorias: ServiceCategoriasService) { }

  ngOnInit(): void {
    this.servicioCategorias.getCategorias().subscribe({
      next: (entity) => {
        entity.lista.sort
        (
          function( a, b ) 
          {
            if ( a.idCategoria < b.idCategoria ) return -1;
            if ( a.idCategoria > b.idCategoria ) return 1;
            return 0;
          }
        );
        this.categorias = entity.lista;  
        console.log(this.categorias[5].idCategoria);
      },
      error: (e) => console.log('no se pudieron conseguir las categorias')
    });
  }

  


}
