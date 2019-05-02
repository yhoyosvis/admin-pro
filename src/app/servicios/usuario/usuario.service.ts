import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS  } from "../../configuraciones/configuracion";
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public router: Router ,public http: HttpClient) { 
    this.cargarSotrage();
   }

  estaLogueado() {
    return (this.token.length > 5)? true : false;
  }

  cargarSotrage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usario'));
    }else{
      this.token = '';
      this.usuario= null;
    }
  }
  guardarStorage(id:string, token:string, usuario: Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));


    this.usuario = usuario;
    this.token = token;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

  }

  cerrarSesion(){
    this.usuario = null;
    this.token = '';

    this.router.navigate(['/login']);

  }

  iniciarGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google';

    return this.http.post(url, {token})
      .pipe(
        map( (resp:any) => {
          this.guardarStorage(resp.id, resp.token, resp.usuario);
          return true;
        })
      )
  }

   iniciarSesion(usuario: Usuario, recuerdame: boolean = false){
     if(recuerdame){
       localStorage.setItem('correo', usuario.correo)
     }else{
       localStorage.removeItem('correo');
     }
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
      .pipe(
        map((resp:any)  => {

          this.guardarStorage(resp.id, resp.token, resp.usuario)

          return true;
        })
      )
   }

   crearUsurio(usuario:Usuario){
      let url = URL_SERVICIOS + '/usuario'
       return this.http.post(url, usuario)
        .pipe(
          map( (res:any) => {
            Swal.fire('Usuario creado', usuario.correo ,'success');
            return res.usuario;
          })
        )
   }
}