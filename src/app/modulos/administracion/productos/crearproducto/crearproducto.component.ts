import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  fgvalidador : FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'precio':['',[Validators.required]],
    'imagen':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,private servicioproducto:ProductoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarproducto()
{
  let nombre= this.fgvalidador.controls["nombre"].value;
  let precio= parseInt(this.fgvalidador.controls["precio"].value);
  let imagen= this.fgvalidador.controls["imagen"].value;
  let p=new ModeloProducto;   
  p.nombre=nombre;
  p.precio=precio;
  p.imagen=imagen;
  this.servicioproducto.crearProducto(p).subscribe((datos: ModeloProducto)=>{
    alert("producto almacenado correctamente");
   this.router.navigate(["/administracion/listarproductos"]);
  },(error:any)=>{
    alert("error almacenando el producto");

  });
}

}
