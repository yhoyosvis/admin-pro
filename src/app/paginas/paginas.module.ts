import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { PAGINAS_ROUTES } from './paginas.routes';

//graficas
import { ChartsModule } from 'ng2-charts';

//pipes module
import { PipesModule } from "../pipes/pipes.module";

//temporal
import { IncrementadorComponent } from '../componentesP/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../componentesP/grafica-dona/grafica-dona.component';
import { ConfiguracionesCuentaComponent } from './configuraciones-cuenta/configuraciones-cuenta.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalSubirComponent } from '../componentesP/modal-subir/modal-subir.component';



@NgModule({
  declarations: [
    PaginasComponent,
    PrincipalComponent,
    ProgresoComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficaDonaComponent,
    ConfiguracionesCuentaComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent,
    UsuariosComponent,
    ModalSubirComponent
  ],

  imports:[
    CommonModule,
    CompartidoModule,
    PAGINAS_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule
  ],

  exports: [
    PaginasComponent,
    PrincipalComponent,
    ProgresoComponent,
    Graficas1Component,

  ],
})
export class PaginasModule { }
