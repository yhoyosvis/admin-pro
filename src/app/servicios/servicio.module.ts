import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{
  ConfiguracionesService,
  MenulateralService,
  CompartidoService,
  UsuarioService,
  SesionGuard,
  SubirArchivoService

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
    SubirArchivoService,
    SesionGuard
  ]
})
export class ServicioModule { }
