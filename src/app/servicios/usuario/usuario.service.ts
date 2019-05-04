import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../configuraciones/configuracion';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';
import { SwalDefaults } from '@sweetalert2/ngx-sweetalert2/di';
import { SubirArchivoService } from '../subirArchivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public router: Router,
    public http: HttpClient, 
    public _subirArchivoServicio: SubirArchivoService) { 
    this.cargarSotrage();
    
   }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarSotrage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
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
  }

  cerrarSesion(){
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

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
      );
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

   actualizarUsuario(usuario:Usuario){
       let url = URL_SERVICIOS + '/usuario/' + usuario._id;
       url += '?token=' + this.token;

       return this.http.put(url, usuario)
       .pipe(
         map((resp:any) => {
          if(usuario._id === this.usuario._id){
            let  usuarioDB :Usuario = resp.usuario;
            this.guardarStorage(usuarioDB._id, this.token, usuarioDB);
          }
           Swal.fire('Usuario actualizado', usuario.nombre, 'success');
           return true;
         })
       )
   }

   cambiarImagen(archivo:File, id: string){
    this._subirArchivoServicio.subirArchivo(archivo, 'usuarios', id)
      .then((resp:any) => {
        this.usuario.img = resp.usuario.img;
        Swal.fire('Imagen Actualizada', this.usuario.nombre, 'success'),

        this.guardarStorage(id,this.token, this.usuario)
      })
      .catch(resp => {
        console.log(resp);
        
      })
   }

   cargarUsuarios(desde:number = 0){
     let url = URL_SERVICIOS + '/usuario?desde=' +desde; 
     return this.http.get(url);
   }

   buscarUsuario(termino: string){
    let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;

    return this.http.get(url)
      .pipe(
        map((resp:any) => resp.usuarios )
      )
   }

   borrarUsuario(id: string){
    let url = URL_SERVICIOS + '/usuario/' + id;
    url += '?token=' + this.token

    return this.http.delete(url);
   }
}
