import { Component, OnInit } from '@angular/core';
import {Publicacion} from 'src/app/model/Poster'
import {PublicidadService} from 'src/app/services/publicidad.service'


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

publicidad: Publicacion = new Publicacion();



  constructor( 
    public registerInjection: PublicidadService) { }

  ngOnInit(): void {

    

  }

  
 

  

 

}
