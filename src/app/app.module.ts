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
import { ComponentNameComponent } from './component-name/component-name.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { ServicereservaService } from './services/servicereserva.service';
import { PresentacionProductoComponent } from './components/presentacion-producto/presentacion-producto.component';

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
    ComponentNameComponent,
    ReservaComponent,
    PresentacionProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServiceCategoriasService,
    ServicereservaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
