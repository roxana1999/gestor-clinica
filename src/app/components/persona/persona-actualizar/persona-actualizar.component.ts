import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-actualizar',
  templateUrl: './persona-actualizar.component.html',
  styleUrls: ['./persona-actualizar.component.css']
})
export class PersonaActualizarComponent implements OnInit {
  idPersona!: number;
  persona: Persona = new Persona();
  public options = [
    {id: 1, value:"FISICA"},
    {id: 2, value:"JURIDICA"},
  ];
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute,private servicioPersonas: PersonaService) { }

  ngOnInit(): void {
    this.idPersona = this.route.snapshot.params['id'];
    console.log(this.idPersona);
    this.servicioPersonas.getPersonaPorId(this.idPersona).subscribe({
      next: (entity) => {this.persona = entity;},
      error: (e) => console.log('no se pudo conseguir la Persona, error: '+e)
    }
    );
  }

  actualizarPersona(): void { 
    this.error = false;
    this.persona.fechaNacimiento = this.persona.fechaNacimiento+" 00:00:00";
    this.servicioPersonas.actualizarPersona(this.persona).subscribe(
      {
        next: () => {this.success=true; this.mensaje='Persona actualizada exitosamente.'}, 
        error: () => {this.error=true; this.mensaje='Ocurrió un error.'; this.persona.fechaNacimiento=""}
      }
    );
  }

  
}
