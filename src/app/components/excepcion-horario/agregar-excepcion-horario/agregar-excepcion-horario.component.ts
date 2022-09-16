import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Excepcion } from 'src/app/models/excepcion';
import { ExcepcionHorarioService } from 'src/app/services/excepcion-horario.service';

@Component({
  selector: 'app-agregar-excepcion-horario',
  templateUrl: './agregar-excepcion-horario.component.html',
  styleUrls: ['./agregar-excepcion-horario.component.css']
})
export class AgregarExcepcionHorarioComponent implements OnInit {
  excepcion: Excepcion = new Excepcion();
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;
  habilitado: boolean = false;
  fecha: string = '';
  constructor( private servicioExcepciones: ExcepcionHorarioService) { }

  ngOnInit(): void {
  }

  agregarExcepcion(): void {
    this.error = false;
    this.servicioExcepciones.agregarExcepcion(this.excepcion).subscribe(
      {
        next: () => {this.success=true; this.mensaje='Excepcion creada exitosamente.'}, 
        error: (e) => {this.error=true; this.mensaje='Ha ocurrido un error '+e}
      }
    );
  }

  cambiarFormato(){
    this.excepcion.fechaCadena =  this.fecha.replace("-","").replace("-","");
  }

  cambiarHabilitacion(){
    this.excepcion.flagEsHabilitar = this.habilitado ? "S" : "N";
  }
}
