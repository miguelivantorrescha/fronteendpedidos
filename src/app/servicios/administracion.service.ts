import { HttpClient, HttpHeaders } from '@angular/common/http';
import { convertPropertyBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPresona } from '../modelos/persona.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private http: HttpClient, private seguridadservicio:SeguridadService) { }

  creacionusuario(nombre:string,apellidos:string,correo:string,celular:string):Observable<ModeloPresona>{
  return this.http.post("http://localhost:3000/personas",{
  nombre:nombre,  apellidos:apellidos,  correo:correo,  celular:celular },{headers :new HttpHeaders()} )
 
}
  


}
