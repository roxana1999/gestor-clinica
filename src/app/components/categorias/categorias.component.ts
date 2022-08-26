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
      next: (entity) => this.categorias = entity.lista,
      error: (e) => console.log('no se pudieron conseguir las categorias')
    }
     );
  }

}
