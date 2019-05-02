import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{
  ConfiguracionesService,
  MenulateralService,
  CompartidoService,
  UsuarioService,
  SesionGuard

} from './index.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    ConfiguracionesService,
    MenulateralService,
    CompartidoService,
    UsuarioService,
    SesionGuard
  ]
})
export class ServicioModule { }
