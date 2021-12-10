import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminarproducto',
  templateUrl: './eliminarproducto.component.html',
  styleUrls: ['./eliminarproducto.component.css']
})
export class EliminarproductoComponent implements OnInit {
 id:string="";
  constructor(private fb: FormBuilder,private servicioproducto:ProductoService,
     private router:Router,
     private route:ActivatedRoute) {
      this.id = this.route.snapshot.params["id"];
      }

  ngOnInit(): void {
  this.eliminar();
   
  }
eliminar(){
this.servicioproducto.EliminarrProducto(this.id).subscribe((datos: ModeloProducto)=>{
  alert("eliminado");
  this.router.navigate(["/administracion/listarproductos"]);
},(error:any)=>{
alert("no sepudo eliminar")
});

}
}
