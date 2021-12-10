import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {

  
  fgvalidador : FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'precio':['',[Validators.required]],
    'imagen':['',[Validators.required]],
    'id':['',[Validators.required]]
  })
  id:string="";
  constructor(private fb: FormBuilder,private servicioproducto:ProductoService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.buscarproducto();
  }

  buscarproducto(){
    this.servicioproducto.Obtenerproductosporid(this.id).subscribe((datos: ModeloProducto)=>{
      this.fgvalidador.controls['id'].setValue(this.id);
      this.fgvalidador.controls['nombre'].setValue(datos.nombre);
      this.fgvalidador.controls['precio'].setValue(datos.precio);
      this.fgvalidador.controls['imagen'].setValue(datos.imagen);
      
    },(error:any)=>{
   alert("no existe")
    })
    
  }




  editarproducto()
{
  let nombre= this.fgvalidador.controls["nombre"].value;
  let precio= parseInt(this.fgvalidador.controls["precio"].value);
  let imagen= this.fgvalidador.controls["imagen"].value;
  let p=new ModeloProducto; 
  
  p.nombre=nombre;
  p.precio=precio;
  p.imagen=imagen;
  p.id=this.id;

  this.servicioproducto.actualizarProducto(p).subscribe((datos: ModeloProducto)=>{
    alert("producto actualizando correctamente");
   this.router.navigate(["/administracion/listarproductos"]);
  },(error:any)=>{
    alert("error actualizando el producto");

  });
}



}









