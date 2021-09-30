import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { AlbumesComponent } from './component/albumes/albumes.component';
import { PublicacionesComponent } from './component/publicaciones/publicaciones.component';

///Modulo
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HttpClientModule } from '@angular/common/http'

import { ScrollingModule } from '@angular/cdk/scrolling'
import { NgxPaginationModule } from 'ngx-pagination';
// Servicios

import { UserService } from 'src/app/services/user.service';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    UsuariosComponent,
    AlbumesComponent,
    PublicacionesComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, NgxPaginationModule, AppRoutingModule,
    ScrollingModule, HttpClientModule,  MDBBootstrapModule.forRoot()],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
