import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscarproducto',
  templateUrl: './buscarproducto.component.html',
  styleUrls: ['./buscarproducto.component.css']
})
export class BuscarproductoComponent implements OnInit {
 listadoregistros:ModeloProducto[]=[];
  constructor(private productoservicio:ProductoService) { }
  ngOnInit(): void {
    this.obtenerlistaproductos();
  }
 
  obtenerlistaproductos(){
 this.productoservicio.Obtenerproductos().subscribe((datos:ModeloProducto[])=> {
 this.listadoregistros=datos;

 });
  }

}
