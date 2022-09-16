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
import { PersonaListarComponent } from './components/persona/persona-listar/persona-listar.component';
import { PersonaAgregarComponent } from './components/persona/persona-agregar/persona-agregar.component';
import { PersonaActualizarComponent } from './components/persona/persona-actualizar/persona-actualizar.component';
import { PersonaEliminarComponent } from './components/persona/persona-eliminar/persona-eliminar.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaAgregarComponent } from './components/agenda/agenda-agregar/agenda-agregar.component';
import { ExcepcionHorarioComponent } from './components/excepcion-horario/excepcion-horario.component';
import { AgregarExcepcionHorarioComponent } from './components/excepcion-horario/agregar-excepcion-horario/agregar-excepcion-horario.component';
import { PresentacionProdListarComponent } from './components/presentacionProd/presentacion-prod-listar/presentacion-prod-listar.component';
import { PresentacionProdEliminarComponent } from './components/presentacionProd/presentacion-prod-eliminar/presentacion-prod-eliminar.component';
import { PresentacionProdActualizarComponent } from './components/presentacionProd/presentacion-prod-actualizar/presentacion-prod-actualizar.component';
import { PresentacionProdAgregarComponent } from './components/presentacionProd/presentacion-prod-agregar/presentacion-prod-agregar.component';



const routes: Routes = [
  {path:'categorias', component:CategoriasComponent},
  {path:'categorias/nuevaCategoria', component:CategoriasAgregarComponent},
  {path:'categorias/actualizarCategoria/:id', component: CategoriasActualizarComponent},
  {path:'categorias/eliminarCategoria/:id', component: CategoriasEliminarComponent},
  {path:'subcategorias', component: SubcategoriaComponent},
  {path:'subcategorias/crearSubcategoria/:id', component: SubcategoriaAgregarComponent},
  {path:'subcategorias/eliminarSubcategoria/:id', component: SubcategoriaEliminarComponent},
  {path:'subcategorias/actualizarSubcategoria/:id', component: SubcategoriaActualizarComponent},
  {path:'personas', component: PersonaListarComponent},
  {path:'personas/agregarPersona', component: PersonaAgregarComponent},
  {path:'personas/actualizarPersona/:id', component: PersonaActualizarComponent},
  {path:'personas/eliminarPersona/:id', component: PersonaEliminarComponent},
  {path:'agenda', component: AgendaComponent},
  {path:'agenda/nuevaAgenda', component: AgendaAgregarComponent},
  {path:'excepcion', component: ExcepcionHorarioComponent},
  {path:'excepcion/nuevaExcepcion', component: AgregarExcepcionHorarioComponent},
  {path:'presentacionProducto', component: PresentacionProdListarComponent},
  {path:'presentacionProducto/eliminarPresentacionProducto/:id', component: PresentacionProdEliminarComponent},
  {path:'presentacionProducto/actualizarPresentacionProducto/:id', component: PresentacionProdActualizarComponent},
  {path:'presentacionProducto/agregarPresentacionProducto/:id', component: PresentacionProdAgregarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
