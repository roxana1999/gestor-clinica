import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ServiceCategoriasService } from './services/service-categorias.service';
import { CategoriasAgregarComponent } from './components/categorias/categorias-agregar/categorias-agregar.component';
import { FormsModule } from '@angular/forms';
import { CategoriasActualizarComponent } from './components/categorias/categorias-actualizar/categorias-actualizar.component';
import { CategoriasEliminarComponent } from './components/categorias/categorias-eliminar/categorias-eliminar.component';
import { SubcategoriaComponent } from './components/subcategoria/subcategoria.component';
import { SubcategoriaEliminarComponent } from './components/subcategoria/subcategoria-eliminar/subcategoria-eliminar.component';
import { SubcategoriaAgregarComponent } from './components/subcategoria/subcategoria-agregar/subcategoria-agregar.component';
import { SubcategoriaActualizarComponent } from './components/subcategoria/subcategoria-actualizar/subcategoria-actualizar.component';
import { PersonaListarComponent } from './components/persona/persona-listar/persona-listar.component';
import { PersonaAgregarComponent } from './components/persona/persona-agregar/persona-agregar.component';
import { PersonaActualizarComponent } from './components/persona/persona-actualizar/persona-actualizar.component';
import { PersonaEliminarComponent } from './components/persona/persona-eliminar/persona-eliminar.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaAgregarComponent } from './components/agenda/agenda-agregar/agenda-agregar.component';
import { ExcepcionHorarioComponent } from './components/excepcion-horario/excepcion-horario.component';
import { AgregarExcepcionHorarioComponent } from './components/excepcion-horario/agregar-excepcion-horario/agregar-excepcion-horario.component';
import { PresentacionProdListarComponent } from './components/presentacionProd/presentacion-prod-listar/presentacion-prod-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CategoriasAgregarComponent,
    CategoriasActualizarComponent,
    CategoriasEliminarComponent,
    SubcategoriaComponent,
    SubcategoriaEliminarComponent,
    SubcategoriaAgregarComponent,
    SubcategoriaActualizarComponent,
    PersonaListarComponent,
    PersonaAgregarComponent,
    PersonaActualizarComponent,
    PersonaEliminarComponent,
    AgendaComponent,
    AgendaAgregarComponent,
    ExcepcionHorarioComponent,
    AgregarExcepcionHorarioComponent,
    PresentacionProdListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceCategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
