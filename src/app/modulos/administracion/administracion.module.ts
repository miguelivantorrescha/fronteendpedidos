import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CreacionpersonasComponent } from './personas/creacionpersonas/creacionpersonas.component';
import { BuscarpersonaComponent } from './personas/buscarpersona/buscarpersona.component';
import { EditarpersonaComponent } from './personas/editarpersona/editarpersona.component';
import { EliminarpersonaComponent } from './personas/eliminarpersona/eliminarpersona.component';
import { CrearproductoComponent } from './productos/crearproducto/crearproducto.component';
import { BuscarproductoComponent } from './productos/buscarproducto/buscarproducto.component';
import { EditarproductoComponent } from './productos/editarproducto/editarproducto.component';
import { EliminarproductoComponent } from './productos/eliminarproducto/eliminarproducto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreacionpersonasComponent,
    BuscarpersonaComponent,
    EditarpersonaComponent,
    EliminarpersonaComponent,
    CrearproductoComponent,
    BuscarproductoComponent,
    EditarproductoComponent,
    EliminarproductoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
