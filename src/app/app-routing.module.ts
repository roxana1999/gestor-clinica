import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasActualizarComponent } from './components/categorias/categorias-actualizar/categorias-actualizar.component';
import { CategoriasAgregarComponent } from './components/categorias/categorias-agregar/categorias-agregar.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const routes: Routes = [
  {path:'categorias', component:CategoriasComponent},
  {path:'categorias/nuevaCategoria', component:CategoriasAgregarComponent},
  {path:'categorias/actualizarCategoria/:id', component: CategoriasActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
