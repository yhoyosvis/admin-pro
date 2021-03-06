import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {

  constructor( public router: Router, public _usuarioServicio: UsuarioService){

  }
  canActivate() {
    if(this._usuarioServicio.estaLogueado()){
     
      return true;
    }else{
     
      this.router.navigate(['/login']);
      return false;
    }
      
  }
}
