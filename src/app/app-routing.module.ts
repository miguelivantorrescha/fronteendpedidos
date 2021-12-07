import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './plantila/contenido/contenido.component';
import { ErrorComponent } from './plantila/error/error.component';

const routes: Routes = [{
  path:"inicio",
  component:ContenidoComponent
},{
  path:"",
  pathMatch:"full",
  redirectTo:"/inicio"

},
{
  path:"seguridad",
  loadChildren:()=>import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
},
{
  path:"administracion",
  loadChildren:()=>import("./modulos/administracion/administracion.module").then(x=>x.AdministracionModule)
},
{
  path:"rpedidos",
  loadChildren:()=>import("./modulos/rpedidos/rpedidos.module").then(x=>x.RpedidosModule)
},


{
  path:"**",
  component: ErrorComponent

}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
