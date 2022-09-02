import { Component, OnInit } from '@angular/core';
import { Subcategoria } from 'src/app/models/subcategoria';
import { ServiceSubcategoriasService } from 'src/app/services/service-subcategorias.service';

@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css']
})
export class SubcategoriaComponent implements OnInit {
  subcategorias: Subcategoria[] = [];
  constructor(private servicioSubcategorias: ServiceSubcategoriasService) { }

  ngOnInit(): void {
    this.servicioSubcategorias.getSubcategorias().subscribe({
      next: (entity) => {
        entity.lista.sort
        (
          function( a, b ) 
          {
            if ( a.idTipoProducto < b.idTipoProducto ) return -1;
            if ( a.idTipoProducto > b.idTipoProducto ) return 1;
            return 0;
          }
        );
        this.subcategorias = entity.lista;  
      },
      error: (e) => console.log('no se pudieron conseguir las subcategorias')
    });
  }

}
