import { Component, OnInit } from '@angular/core';
import { Agenda } from 'src/app/models/agenda';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent implements OnInit {
  agendas: Agenda[] = [];
  mensaje!: string;
  filtroEmpleado!: number;
  filtroDia!: number;

  constructor(private servicioAgenda: AgendaService) {}

  ngOnInit(): void {
    this.getAgendas();
  }

  getAgendas(queryParams: {} = {}) {
    this.mensaje = '';
    this.servicioAgenda
      .getAgendas({ ejemplo: JSON.stringify(queryParams) })
      .subscribe({
        next: (entity) => {
          //Ordenar lista por ID
          entity.lista.sort(this.compararIDs);
          this.agendas = entity.lista;
          if (this.agendas.length == 0) this.mensaje = 'No hay resultados.';
        },
        error: (e) => (this.mensaje = e),
      });
  }

  filtrarAgendas(){
    let params: any = {};
    if (this.filtroEmpleado!=null)
      params["idEmpleado"] = {"idPersona" : this.filtroEmpleado}
    if (this.filtroDia!=null){
      params["dia"] = this.filtroDia;
    }
    this.getAgendas(params);
  }

  compararIDs(a: Agenda, b: Agenda) {
    if (a.idPersonaHorarioAgenda < b.idPersonaHorarioAgenda) return -1;
    if (a.idPersonaHorarioAgenda > b.idPersonaHorarioAgenda) return 1;
    return 0;
  }

  dividir(cadena?: string){
    return cadena?.slice(0,2) + ":" + cadena?.slice(-2);
  }
}
