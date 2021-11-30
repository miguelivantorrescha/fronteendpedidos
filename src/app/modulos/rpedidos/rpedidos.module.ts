import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpedidosRoutingModule } from './rpedidos-routing.module';
import { RealizapedidosComponent } from './realizapedidos/realizapedidos.component';


@NgModule({
  declarations: [
    RealizapedidosComponent
  ],
  imports: [
    CommonModule,
    RpedidosRoutingModule
  ]
})
export class RpedidosModule { }
