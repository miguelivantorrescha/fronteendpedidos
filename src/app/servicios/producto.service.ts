import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProducto } from '../modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
url='http://localhost:3000'
token: string="";
  constructor(private http: HttpClient, private seguridadservicio:SeguridadService) { 
    this.token=seguridadservicio.obtenertoken();
  }

Obtenerproductos():Observable<ModeloProducto[]>{
return this.http.get<ModeloProducto[]>('http://localhost:3000/productos');
}

crearProducto(producto:ModeloProducto):Observable<ModeloProducto>{
  return this.http.post<ModeloProducto>('http://localhost:3000/productos',producto,{
    headers: new HttpHeaders({
      'Authorization': `bearer ${this.token}`
    })
  });
}
actualizarProducto(producto:ModeloProducto):Observable<ModeloProducto>{
  return  this.http.put<ModeloProducto>(`http://localhost:3000/productos/${producto.id}`,producto,{
    headers: new HttpHeaders({
      'Authorization': `bearer ${this.token}`
    })
  });
}
EliminarrProducto(id: string):Observable<any>{
  return this.http.delete<ModeloProducto>(`http://localhost:3000/productos/${id}`,{
    headers: new HttpHeaders({'Authorization': `bearer ${this.token}`})
  });
}
Obtenerproductosporid(id: string):Observable<ModeloProducto>{
  return this.http.get<ModeloProducto>(`http://localhost:3000/productos/${id}`);
  }

  



}




