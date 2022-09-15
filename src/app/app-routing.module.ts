import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasActualizarComponent } from './components/categorias/categorias-actualizar/categorias-actualizar.component';
import { CategoriasAgregarComponent } from './components/categorias/categorias-agregar/categorias-agregar.component';
import { CategoriasEliminarComponent } from './components/categorias/categorias-eliminar/categorias-eliminar.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { SubcategoriaAgregarComponent } from './components/subcategoria/subcategoria-agregar/subcategoria-agregar.component';
import { SubcategoriaEliminarComponent } from './components/subcategoria/subcategoria-eliminar/subcategoria-eliminar.component';
import { SubcategoriaComponent } from './components/subcategoria/subcategoria.component';
import { SubcategoriaActualizarComponent } from './components/subcategoria/subcategoria-actualizar/subcategoria-actualizar.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { PresentacionProductoComponent } from './components/presentacion-producto/presentacion-producto.component';

const routes: Routes = [
  {path:'categorias', component:CategoriasComponent},
  {path:'categorias/nuevaCategoria', component:CategoriasAgregarComponent},
  {path:'categorias/actualizarCategoria/:id', component: CategoriasActualizarComponent},
  {path:'categorias/eliminarCategoria/:id', component: CategoriasEliminarComponent},
  {path:'subcategorias', component: SubcategoriaComponent},
  {path:'subcategorias/crearSubcategoria/:id', component: SubcategoriaAgregarComponent},
  {path:'subcategorias/eliminarSubcategoria/:id', component: SubcategoriaEliminarComponent},
  {path:'subcategorias/actualizarSubcategoria/:id', component: SubcategoriaActualizarComponent},
  {path:'presentacionproducto',component:PresentacionProductoComponent},
  {path:'reserva', component: ReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
