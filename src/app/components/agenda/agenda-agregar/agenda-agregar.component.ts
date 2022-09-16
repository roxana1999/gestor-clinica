import { Component, OnInit } from '@angular/core';
import { Agenda } from 'src/app/models/agenda';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-agenda-agregar',
  templateUrl: './agenda-agregar.component.html',
  styleUrls: ['./agenda-agregar.component.css'],
})
export class AgendaAgregarComponent implements OnInit {
  agenda: Agenda = new Agenda();
  mensaje: string = '';
  success: boolean = false;
  error: boolean = false;

  constructor(private servicioAgendas: AgendaService) {}

  ngOnInit(): void {}

  agregarAgenda(): void {
    this.error = false;
    this.servicioAgendas.agregarAgenda(this.agenda).subscribe({
      next: () => {
        this.success = true;
        this.mensaje = 'Agenda agregada exitosamente.';
      },
      error: (e) => {
        this.error = true;
        this.mensaje = 'Ocurrió un error.';
      },
    });
  }
}
