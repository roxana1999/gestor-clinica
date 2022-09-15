import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-listar',
  templateUrl: './persona-listar.component.html',
  styleUrls: ['./persona-listar.component.css']
})
export class PersonaListarComponent implements OnInit {
  personas: Persona[] = [];
  mensaje!: string;

  constructor(private servicioPersonas: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(queryParams: {}={}){
    this.mensaje="";
    this.servicioPersonas.getPersonas({like: 'S', ejemplo: JSON.stringify(queryParams)}).subscribe({
      next: (entity) => {
        this.personas = entity.lista; 
        if(this.personas.length==0)
          this.mensaje="No hay resultados." 
      },
      error: (e) => this.mensaje = e
    });
  }
}