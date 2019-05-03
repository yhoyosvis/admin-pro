import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/index.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {
  usuario: Usuario;
  imagenSubir: File;
  imagenTemp: string;
  constructor( public _usuarioServicio: UsuarioService) {

    this.usuario = this._usuarioServicio.usuario;
   }

  ngOnInit() {
  }

  guardar(usuario:Usuario){
    this.usuario.nombre = usuario.nombre;
    if(!this.usuario.google){
      this.usuario.correo = usuario.correo;
    }
    this.usuario.correo = usuario.correo;

    this._usuarioServicio.actualizarUsuario(this.usuario)
      .subscribe()

  }

  seleccionImage(archivo: File){

    if(!archivo){
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;
    console.log(archivo);
    
    if(archivo.type.indexOf('image')< 0){
      Swal.fire('Solo imagenes', 'el archivo seleccionado no es una imagen', 'error')
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result.toString();
  }

  cambiarImagen(){
    this._usuarioServicio.cambiarImagen(this.imagenSubir, this.usuario._id)
  }

}
