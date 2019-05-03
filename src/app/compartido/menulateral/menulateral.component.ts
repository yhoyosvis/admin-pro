import { Component, OnInit } from '@angular/core';
import { MenulateralService, UsuarioService } from 'src/app/servicios/index.service';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styles: []
})
export class MenulateralComponent implements OnInit {
  usuario: Usuario;
  constructor( public _menulateral: MenulateralService, public _usuarioServicio: UsuarioService ) { }

  ngOnInit() {
    this.usuario = this._usuarioServicio.usuario;
  }

}
