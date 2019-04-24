import { NgModule } from '@angular/core';

import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { PAGINAS_ROUTES } from './paginas.routes';


@NgModule({
  declarations: [
    PaginasComponent,
    PrincipalComponent,
    ProgresoComponent,
    Graficas1Component,
  ],

  imports:[
    CompartidoModule,
    PAGINAS_ROUTES
  ],

  exports: [
    PaginasComponent,
    PrincipalComponent,
    ProgresoComponent,
    Graficas1Component,
    CompartidoModule
  ],
})
export class PaginasModule { }
