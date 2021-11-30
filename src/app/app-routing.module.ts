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
  redirectTo:"inicio"

},{
  path:"**",
  component: ErrorComponent

},
{
  path:"seguridad",
  loadChildren:()=>import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
