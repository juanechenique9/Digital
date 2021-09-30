import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicacion } from 'src/app/model/Poster';

@Injectable({
  providedIn: 'root',
})
export class PublicidadService {
  ruta: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  crearPublicacion(publicidad: Publicacion): Observable<any> {
    return this.http.post<any>(`${this.ruta}/posts`, publicidad);
  }
}
