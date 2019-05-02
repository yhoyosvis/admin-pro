import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../servicios/index.service';
import { Usuario } from '../modelos/usuario.model';
declare function init_plugins();
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo: string;
  recuerdame: boolean = false;

  auth2: any;
  constructor( public router: Router, public _usuarioServicio: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.iniciarGoogle();
    this.correo = localStorage.getItem('correo') || '';
    if(this.correo.length > 1){
      this.recuerdame = true;
    }
  }
  iniciarGoogle() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '388411455122-is7ftqi6oq1i81967hpacuh6aejv744j.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }

  attachSignin(element){
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
     // let profile = googleUser.getBasicProfile();
     let token = googleUser.getAuthResponse().id_token;
     this._usuarioServicio.iniciarGoogle(token)
      .subscribe(res => window.location.href = '#/principal')
      
    });
  }

  ingresar( forma: NgForm){
    if(forma.invalid){
      return;
    }
    let usuario = new Usuario(null, forma.value.correo, forma.value.contrasenia)
    this._usuarioServicio.iniciarSesion(usuario, forma.value.recuerdame)
      .subscribe(res => this.router.navigate(['/principal']));
  }

}
