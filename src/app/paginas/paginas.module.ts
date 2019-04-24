import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { PAGINAS_ROUTES } from './paginas.routes';

//graficas
import { ChartsModule } from 'ng2-charts';

//temporal
import { IncrementadorComponent } from '../componentesP/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../componentesP/grafica-dona/grafica-dona.component';



@NgModule({
  declarations: [
    PaginasComponent,
    PrincipalComponent,
    ProgresoComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficaDonaComponent
  ],

  imports:[
    CompartidoModule,
    PAGINAS_ROUTES,
    FormsModule,
    ChartsModule
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
