import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumesComponent } from './component/albumes/albumes.component';
import { HomeComponent } from './component/home/home.component';
import { PublicacionesComponent } from './component/publicaciones/publicaciones.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'albumes',
    component: AlbumesComponent,
  },
  {
    path: 'publicaciones',
    component: PublicacionesComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
