import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/index.service';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styles: []
})
export class CabeceraComponent implements OnInit {
  usuario: Usuario;
  constructor(public _usuarioServicio: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuarioServicio.usuario;
    
  }

  

}
