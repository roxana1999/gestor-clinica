import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-eliminar',
  templateUrl: './persona-eliminar.component.html',
  styleUrls: ['./persona-eliminar.component.css']
})
export class PersonaEliminarComponent implements OnInit {
  idPersona!: number;
  persona: Persona = new Persona();
  mensaje: string = "";
  success: boolean = false;
  error: boolean = false;

  constructor(private route: ActivatedRoute, private servicioPersonas: PersonaService) { }

  ngOnInit(): void {
    this.idPersona = this.route.snapshot.params['id'];
    console.log(this.idPersona);
    this.servicioPersonas.getPersonaPorId(this.idPersona).subscribe({
      next: (entity) => this.persona = entity,
      error: (e) => console.log('no se pudo conseguir la persona, error: ' + e)
    });
  }

  eliminarPersona(): void {
    this.error = false;
    this.servicioPersonas.eliminarPersona(this.idPersona).subscribe(
      {
        next: () => { this.success = true; this.mensaje = 'Persona eliminada exitosamente.' },
        error: (e) => { this.error = true; this.mensaje = 'Ocurrió un error: ' + e.message }
      }
    );
  }

  keepOriginalOrder = (a: any, b: any) => a.key

}


