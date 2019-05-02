import { Component } from '@angular/core';
import { ConfiguracionesService } from './servicios/configuraciones/configuraciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adminpro';

  constructor(public _ajustes :ConfiguracionesService){

    

  }
}
