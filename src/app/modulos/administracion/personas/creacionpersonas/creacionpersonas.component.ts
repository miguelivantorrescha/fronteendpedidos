import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPresona } from 'src/app/modelos/persona.model';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-creacionpersonas',
  templateUrl: './creacionpersonas.component.html',
  styleUrls: ['./creacionpersonas.component.css']
})
export class CreacionpersonasComponent implements OnInit {
  fgvalidador : FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'apellidos':['',[Validators.required]],
    'correo':['',[Validators.required]],
    'celular':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,private serviciocadministracion:AdministracionService, private router:Router) { }

  ngOnInit(): void {
  }


 crearusuario(){
  let nombre= this.fgvalidador.controls["nombre"].value;
  let apellidos= this.fgvalidador.controls["apellidos"].value;
  let correo= this.fgvalidador.controls["correo"].value;
  let celular= this.fgvalidador.controls["celular"].value;
  //this.serviciocadministracion.creacionusuario(nombre,apellido,correo,telefono);
  //alert("registrado");   
  //let p=new ModeloPresona;   
  //p.nombre=nombre;
  //p.apellido=apellido;
  //p.correo=correo;
  //p.telefono=telefono;
  this.serviciocadministracion.creacionusuario(nombre,  apellidos,  correo, celular).subscribe((datos: ModeloPresona)=>{
    alert("cliente  creado correctamente");
  
   this.router.navigate(["/inicio"]);
  },(error:any)=>{
    alert(nombre); 
    alert(apellidos); 
    alert(correo); 
    alert(celular);
    alert("error creando cliente");

  });


 }
}