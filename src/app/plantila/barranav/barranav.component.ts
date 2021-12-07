import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.component.html',
  styleUrls: ['./barranav.component.css']
})
export class BarranavComponent implements OnInit {


seiniciosesion: boolean=false;
subs: Subscription=new Subscription();

  constructor(private servicioseguri: SeguridadService) { 


  }

  ngOnInit(): void {
    this.subs=this.servicioseguri.Obtenerdatosusuariosesion().subscribe((datos:ModeloIdentificar)=>{
     this.seiniciosesion=datos.estaidentificado;
    });
  }

}
