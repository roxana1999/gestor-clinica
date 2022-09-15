import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ServicereservaService } from 'src/app/services/servicereserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reserva: Reserva[] = [];
  constructor(private servicioReserva: ServicereservaService) { }

  ngOnInit(): void {
    this.servicioReserva.getReserva().subscribe(
      entity => this.reserva = entity.lista,
      error =>console.log('no se pudieron conseguir las reservas')
     );
  }

}
