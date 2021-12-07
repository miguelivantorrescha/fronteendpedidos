import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrarsesion',
  templateUrl: './cerrarsesion.component.html',
  styleUrls: ['./cerrarsesion.component.css']
})
export class CerrarsesionComponent implements OnInit {

  constructor(private servicioseg:SeguridadService, private router:Router) { }

  ngOnInit(): void {

 this.servicioseg.eliminarinformacionsesion();
 this.router.navigate(['/inicio']);

  }

}
