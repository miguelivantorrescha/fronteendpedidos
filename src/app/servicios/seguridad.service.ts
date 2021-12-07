import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  AlmacenarSesion(dato: any) {
    throw new Error('Method not implemented.');
  }
   url='http://localhost:3000';
   datosusuariosesion= new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar()) ;


  constructor(private http: HttpClient) {
    this.verficarsesionactual();
   }

   verficarsesionactual(){
      let datos= this.obtenerInformacionSesion();
      if (datos){
        this.refrescardatossesion(datos);
      }

   }





   identificar(usuario: string, clave:string ):Observable<ModeloIdentificar>{
     return this.http.post<ModeloIdentificar>('http://localhost:3000/identificarPersona',{
       usuario:usuario,
       clave:clave
     }, {headers:new HttpHeaders({ })}) }

     Almacensesion(datos: ModeloIdentificar){
       datos.estaidentificado=true;
      let stringDatos=JSON.stringify(datos);
        localStorage.setItem("datosSesion",stringDatos);
      this.refrescardatossesion(datos);
      }
    
      obtenerInformacionSesion(){
        let datosString=localStorage.getItem("datosSesion")

        if(datosString){
          let datos=JSON.parse(datosString);
          return datos;
        }else{
          return null;
        }
      }

      eliminarinformacionsesion(){
        localStorage.removeItem("datosSesion");
        this.refrescardatossesion(new ModeloIdentificar());

       
      }
      
      sehainiciadoseseion(){
        let datosString=localStorage.getItem("datosSesion")

        return datosString;
        }
      Obtenerdatosusuariosesion(){
        return this.datosusuariosesion.asObservable();
      }

      refrescardatossesion(datos: ModeloIdentificar){
        this.datosusuariosesion.next(datos);

      }

obtenertoken(){// sacar nombre de usuario
  let datosString=localStorage.getItem("datosSesion")
  if(datosString){
    let datos=JSON.parse(datosString);
    return datos.tk;
  }else{
    return '';
  }
}


}