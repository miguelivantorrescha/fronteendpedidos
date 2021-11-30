import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavComponent } from './plantila/barranav/barranav.component';
import { PiedepaginaComponent } from './plantila/piedepagina/piedepagina.component';
import { ContenidoComponent } from './plantila/contenido/contenido.component';
import { ErrorComponent } from './plantila/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    BarranavComponent,
    PiedepaginaComponent,
    ContenidoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
