import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
path:"eliminarproducto",
  component:EliminarproductoComponent
},
{
path:"listarproductos",
  component:BuscarproductoComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
