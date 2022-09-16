import { Component, OnInit } from '@angular/core';
import { Excepcion } from 'src/app/models/excepcion';
import { ExcepcionHorarioService } from 'src/app/services/excepcion-horario.service';

@Component({
  selector: 'app-excepcion-horario',
  templateUrl: './excepcion-horario.component.html',
  styleUrls: ['./excepcion-horario.component.css'],
})
export class ExcepcionHorarioComponent implements OnInit {
  excepciones: Excepcion[] = [];
  mensaje!: string;
  filtroEmpleado!: number;
  filtroFecha!: string;

  constructor(private servicioExcepcion: ExcepcionHorarioService) {}

  ngOnInit(): void {
    this.getExcepciones();
  }

  getExcepciones(queryParams: {}={}) {
    this.mensaje="";
    this.servicioExcepcion.getHorariosExcepcion({ejemplo: JSON.stringify(queryParams)}).subscribe({
      next: (entity) => {
        //Ordenar lista por ID
        entity.lista.sort(this.compararIDs);
        this.excepciones = entity.lista;
        if (this.excepciones.length==0)
          this.mensaje="No hay resultados."
      },
      error: (e) => this.mensaje = e
    });
  }

  dividir(cadena?: string){
    return cadena?.slice(0,2) + ":" + cadena?.slice(-2);
  }

  filtrarExcepciones(){
    let params: any = {};
    if (this.filtroFecha)
      params["fechaCadena"] = this.filtroFecha.replace("-","").replace("-","");
    if (this.filtroEmpleado){
    //   this.filtroIdCategoria = this.limpiarInputNumerica(this.filtroIdCategoria);
    //   console.log(this.filtroIdCategoria);
      params["idEmpleado"] = {"idPersona" : this.filtroEmpleado};
    }
    this.getExcepciones(params);
  }

  compararIDs(a: Excepcion,b: Excepcion){
    if ( a.idHorarioExcepcion < b.idHorarioExcepcion ) return -1;
    if ( a.idHorarioExcepcion > b.idHorarioExcepcion ) return 1;
    return 0;
  }
}
