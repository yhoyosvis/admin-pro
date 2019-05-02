import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/index.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styles: []
})
export class CabeceraComponent implements OnInit {

  constructor(public _usuarioServicio: UsuarioService) { }

  ngOnInit() {
  }

  

}
