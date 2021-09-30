import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {
  ruta: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAlbum(): Observable<any> {
    return this.http.get<any>(this.ruta);
  }
}
