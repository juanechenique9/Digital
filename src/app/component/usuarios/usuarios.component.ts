import { Component, OnInit } from '@angular/core';
import {Usuario} from 'src/app/model/Usuarios'
import {UserService} from 'src/app/services/user.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios: Array<Usuario> = new Array<Usuario>()
  copylistaUsuarios: Array<Usuario> = new Array<Usuario>()
  paginador: number;
  itemsPerPage = 4;

  constructor(public userInjection: UserService) { }

  ngOnInit(): void {

    this.userService()

  }

  userService(){
    this.userInjection.getUsers().subscribe((users) =>{
      this.listaUsuarios = users
      this.copylistaUsuarios = users
      console.log(this.listaUsuarios)
    }) 
  } 

  searchUser(event){
    const nameUser: string = event.target.value

    if(nameUser === ''){
      this.copylistaUsuarios = this.listaUsuarios
    }else {
      this.copylistaUsuarios = this.listaUsuarios.filter((v)=>{
      return v.userName.toLowerCase().includes(nameUser)
    
    })
    }

  }

  handlePageChange(event) {
    this.paginador = event;
  }

}
