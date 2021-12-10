import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarranavComponent } from './plantila/barranav/barranav.component';
import { PiedepaginaComponent } from './plantila/piedepagina/piedepagina.component';
import { ContenidoComponent } from './plantila/contenido/contenido.component';
import { ErrorComponent } from './plantila/error/error.component';
import { InicioComponent } from './plantila/inicio/inicio.component';
import {HttpClientModule}from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarranavComponent,    
    ContenidoComponent,
    PiedepaginaComponent,
    ErrorComponent,
    InicioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
