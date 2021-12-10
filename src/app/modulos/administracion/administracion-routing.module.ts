import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarempleadoComponent } from './empleado/buscarempleado/buscarempleado.component';
import { CrearempleadoComponent } from './empleado/crearempleado/crearempleado.component';
import { EditarempleadoComponent } from './empleado/editarempleado/editarempleado.component';
import { EliminarempleadoComponent } from './empleado/eliminarempleado/eliminarempleado.component';
import { CategoriaComponent } from './otros/categoria/categoria.component';
import { NuevosComponent } from './otros/nuevos/nuevos.component';
import { BuscarpersonaComponent } from './personas/buscarpersona/buscarpersona.component';
import { CreacionpersonasComponent } from './personas/creacionpersonas/creacionpersonas.component';
import { EditarpersonaComponent } from './personas/editarpersona/editarpersona.component';
import { EliminarpersonaComponent } from './personas/eliminarpersona/eliminarpersona.component';
import { BuscarproductoComponent } from './productos/buscarproducto/buscarproducto.component';
import { CrearproductoComponent } from './productos/crearproducto/crearproducto.component';
import { EditarproductoComponent } from './productos/editarproducto/editarproducto.component';
import { EliminarproductoComponent } from './productos/eliminarproducto/eliminarproducto.component';

const routes: Routes = [{ 
    path:"creacionpersona",
    component:CreacionpersonasComponent
},
{
  path:"editarpersona",
    component:EditarpersonaComponent
},
{
  path:"buscarpersona",
    component:BuscarpersonaComponent
},
{
  path:"eliminarpersona",
    component:EliminarpersonaComponent
},
{ 
  path:"crearproducto",
  component:CrearproductoComponent
},
{
path:"editarproducto/:id",
  component:EditarproductoComponent
},
{
path:"buscarproducto",
  component:BuscarproductoComponent
},
{
path:"eliminarproducto/:id",
  component:EliminarproductoComponent
},
{
path:"listarproductos",
  component:BuscarproductoComponent
},
{
path:"categoria",
  component:CategoriaComponent
},
{
path:"nuevos",
  component:NuevosComponent
}
,
{
path:"crearempleados",
  component:CrearempleadoComponent
},
{
path:"buscarempleado",
  component:BuscarempleadoComponent
},
{
path:"editarempleados/:id",
  component:EditarempleadoComponent
},
{
path:"eliminarempleado/:id",
  component:EliminarempleadoComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
