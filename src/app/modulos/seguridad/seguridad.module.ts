import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioclaveComponent } from './cambioclave/cambioclave.component';
import { RecuperaclaveComponent } from './recuperaclave/recuperaclave.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioclaveComponent,
    RecuperaclaveComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
