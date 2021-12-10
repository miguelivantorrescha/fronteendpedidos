import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ModeloPresona } from 'src/app/modelos/persona.model';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-creacionpersonas',
  templateUrl: './creacionpersonas.component.html',
  styleUrls: ['./creacionpersonas.component.css']
})
export class CreacionpersonasComponent implements OnInit {

  siteKey:string="";

  fgvalidador : FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required]],
    'celular':['',[Validators.required]],
    'captcha':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder, private serviciocadministracion:AdministracionService,
     private router:Router ) {this.siteKey="6Le6wFcdAAAAAFiU7ieEsBf6hcgrLCOybErnjBHH"; }

  ngOnInit(): void {


  }
 crearusuario(){
  let nombre= this.fgvalidador.controls["nombre"].value;
  let apellidos= this.fgvalidador.controls["apellidos"].value;
  let correo= this.fgvalidador.controls["correo"].value;
  let celular= this.fgvalidador.controls["celular"].value;  
  this.serviciocadministracion.creacionusuario(nombre,  apellidos,  correo, celular).subscribe((datos: ModeloPresona)=>{
    alert("cliente  creado correctamente");    
    console.log(this.serviciocadministracion);
   this.router.navigate(["/inicio"]);
  },(error:any)=>{
        alert("error creando cliente");
  });
 }
 
}