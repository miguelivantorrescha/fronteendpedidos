import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioclaveComponent } from './cambioclave/cambioclave.component';
import { RecuperaclaveComponent } from './recuperaclave/recuperaclave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioclaveComponent,
    RecuperaclaveComponent,
    CerrarsesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
