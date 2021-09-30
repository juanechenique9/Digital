import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Albums';
import { GaleriaService } from 'src/app/services/galeria.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css'],
})
export class AlbumesComponent implements OnInit {
  listaAlbumes: Array<Album> = new Array<Album>();

  constructor(public albumInjection: GaleriaService) {}

  ngOnInit(): void {

    this.albumService()

  }

  albumService() {
    this.albumInjection.getAlbum().subscribe((galeria) => {
      this.listaAlbumes = galeria;
    });
  }
}
