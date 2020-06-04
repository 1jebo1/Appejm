import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './Producto/new/new.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { EditarComponent } from './Producto/editar/editar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'new',component:NewComponent},
  {path:'editar',component:EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
