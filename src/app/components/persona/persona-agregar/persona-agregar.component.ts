import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-agregar',
  templateUrl: './persona-agregar.component.html',
  styleUrls: ['./persona-agregar.component.css']
})
export class PersonaAgregarComponent implements OnInit {
  persona: Persona = new Persona();
  cantidadDatosRequeridos = 8;
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;
  warning: boolean = false;
  public options = [
    {id: 1, value:"FISICA"},
    {id: 2, value:"JURIDICA"},
  ]

  constructor(private servicioPersonas: PersonaService) { }

  ngOnInit(): void {
  }

  agregarPersona(): void {
    this.error = false;
    this.warning = false;
    var count = 0;
    for(var prop in this.persona)
      ++count;
    if (count!=this.cantidadDatosRequeridos){
      this.warning=true; this.mensaje="Por favor, rellene todos los campos.";
    }
    else {
      this.persona.fechaNacimiento = this.persona.fechaNacimiento+" 00:00:00"
      this.servicioPersonas.agregarPersona(this.persona).subscribe(
        {
          next: () => {this.success=true; this.mensaje='Persona agregada exitosamente.'}, 
          error: (e) => {this.error=true; this.mensaje='Ocurrió un error: '+e.message; this.persona.fechaNacimiento =""}
        }
      );
    };
  }
}
