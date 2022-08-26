import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasAgregarComponent } from './components/categorias/categorias-agregar/categorias-agregar.component';
import { CategoriasComponent } from './components/categorias/categorias.component';

const routes: Routes = [
  {path:'categorias', component:CategoriasComponent},
  {path:'nuevaCategoria', component:CategoriasAgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
