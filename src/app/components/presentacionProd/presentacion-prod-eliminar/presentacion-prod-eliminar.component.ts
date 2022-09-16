import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentacionProducto } from 'src/app/models/presentacionProducto';
import { PresentacionProdService } from 'src/app/services/presentacion-prod.service';

@Component({
  selector: 'app-presentacion-prod-eliminar',
  templateUrl: './presentacion-prod-eliminar.component.html',
  styleUrls: ['./presentacion-prod-eliminar.component.css']
})
export class PresentacionProdEliminarComponent implements OnInit {
  idPresentacionProducto!: number;
  presentacionProducto: PresentacionProducto = new PresentacionProducto();
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;
  
  constructor(private route: ActivatedRoute, private servicioPresentacionProducto: PresentacionProdService) { }

  ngOnInit(): void {
    this.idPresentacionProducto = this.route.snapshot.params['id'];
    console.log(this.idPresentacionProducto);
    this.servicioPresentacionProducto.getPresentacionProductoPorId(this.idPresentacionProducto).subscribe({
      next: (entity) => this.presentacionProducto = entity,
      error: (e) => console.log('no se pudo conseguir la PresentacionProducto, error: ' + e)
    });
  }
  eliminarPresentacionProducto(): void {
    this.error = false;
    this.servicioPresentacionProducto.eliminarPresentacionProducto(this.idPresentacionProducto).subscribe(
      {
        next: () => { this.success = true; this.mensaje = 'Presentacion de producto eliminado exitosamente.' },
        error: (e) => { this.error = true; this.mensaje = 'Ocurrió un error: ' + e.message }
      }
    );
  }
}
