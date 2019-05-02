import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { UsuarioService } from '../servicios/index.service';
import { Usuario } from '../modelos/usuario.model';
import { Router } from '@angular/router';
declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
     public _usuarioServicio: UsuarioService,
     public router: Router
     ) { }

  sonIguales(campo1:string, campo2:string){

    return (group: FormGroup) => {

      let cont1 = group.controls[campo1].value;
      let cont2 = group.controls[campo2].value;

      if(cont1 === cont2){
        return null;
      }

      return {
        sonIguales: true
      };
    }
  }

  ngOnInit() {
    init_plugins()

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasenia: new FormControl(null, Validators.required),
      contrasenia2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, {validators: this.sonIguales('contrasenia', 'contrasenia2')});


    this.forma.setValue({
      nombre: 'test',
      correo: 'test@test.com',
      contrasenia: '123',
      contrasenia2: '1234',
      condiciones: true
    })
  }

  registarUsuario(){

    if( this.forma.invalid){
      return
    }

    if(!this.forma.value.condiciones ){
      Swal.fire('Importante', 'Dene aceptar terminos y condiciones', 'warning');
      return;
      
    }
    
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.contrasenia
    );
    
    this._usuarioServicio.crearUsurio(usuario)
    .subscribe(resp => {
      this.router.navigate(['/login']);
    })
  }

}
