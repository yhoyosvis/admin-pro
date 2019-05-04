import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{
  ConfiguracionesService,
  MenulateralService,
  CompartidoService,
  UsuarioService,
  SesionGuard,
  SubirArchivoService,
  ModalSubirService

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
    SesionGuard,
    ModalSubirService
  ]
})
export class ServicioModule { }
