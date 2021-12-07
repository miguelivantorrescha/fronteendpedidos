import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioclaveComponent } from './cambioclave/cambioclave.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperaclaveComponent } from './recuperaclave/recuperaclave.component';

const routes: Routes = [
{
  path:"identificacion",
  component:IdentificacionComponent
},
{
  path:"cambioclave",
  component:CambioclaveComponent
},
{
  path:"recuperarclave",
  component:RecuperaclaveComponent
},
{
  path:"cerrarsesion",
  component:CerrarsesionComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
