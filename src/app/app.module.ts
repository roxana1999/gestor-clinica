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

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CategoriasAgregarComponent,
    CategoriasActualizarComponent
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
