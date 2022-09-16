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
  ordenes = [
    { id: "asc", value: "ascendente" },
    { id: "desc", value: "descendente" },
  ]
  atributos = [
    { value: "nombre" },
    { value: "apellido" }
  ]
  orden!: string;
  atributo!: string;
  nombreCompleto!: string;
  nombreContiene!: string;

  constructor(private servicioPersonas: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(queryParams: {} = {}) {
    this.mensaje = "";
    this.servicioPersonas.getPersonas(queryParams).subscribe({
      next: (entity) => {
        this.personas = entity.lista;
        if (this.personas.length == 0)
          this.mensaje = "No hay resultados."
      },
      error: (e) => this.mensaje = e
    });
  }

  filtrarPersonas() {
    let params: any = {};
    if (this.orden != undefined && this.orden != null)
      params["orderDir"] = this.orden;
    if (this.atributo != null && this.atributo != undefined) {
      params["orderBy"] = this.atributo;
    }
    this.getPersonas(params);
  }

  buscarPorNombre() {
    let params: any = {};
    if (this.nombreCompleto != undefined && this.nombreCompleto != null){
      params["ejemplo"] =  JSON.stringify({"nombre": this.nombreCompleto}) ;
      this.getPersonas(params);
    }
  }

  buscarSiContiene() {
    let params: any = {};
    if (this.nombreContiene != undefined && this.nombreContiene != null){
      params["like"] = 'S';
      params["ejemplo"] =  JSON.stringify({"nombre": this.nombreContiene}) ;
      this.getPersonas(params);
    }
  }

  mostrarUsuariosSistema() {
    let params: any = {};
    params["ejemplo"] =  JSON.stringify({"soloUsuariosDelSistema": true});
    this.getPersonas(params);
  }
}