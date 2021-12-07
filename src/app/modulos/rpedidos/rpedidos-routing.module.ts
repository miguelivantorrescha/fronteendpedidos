import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealizapedidosComponent } from './realizapedidos/realizapedidos.component';

const routes: Routes = [
{
  path:"realizapedidos",
  component:RealizapedidosComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpedidosRoutingModule { }
