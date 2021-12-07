import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgvalidador:FormGroup = this.fb.group({
    'usuario':['',[Validators.required,Validators.email]],
    'clave':['',[Validators.required]]
  });
  constructor(private fb:FormBuilder, private servicioSeguridad: SeguridadService,private router:Router) { }

  ngOnInit(): void {
   
  }

identificarusuario(){
 let usuario=this.fgvalidador.controls["usuario"].value;
 let clave=this.fgvalidador.controls["clave"].value;
 let clavecifrada= cryptoJS.MD5(clave).toString();
 this.servicioSeguridad.identificar(usuario,clavecifrada).subscribe((datos:any)=>{
  this.servicioSeguridad.Almacensesion(datos);
  this.router.navigate(['/inicio']);

  alert ("datos correctos")
 }, 
 (error:any)=>{
  alert ("datos invalidos")
 })
}



}
