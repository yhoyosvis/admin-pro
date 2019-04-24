import { NgModule } from '@angular/core';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenulateralComponent } from './menulateral/menulateral.component';
import { MigasdepanComponent } from './migasdepan/migasdepan.component';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';

@NgModule({
  declarations: [
    CabeceraComponent,
    MenulateralComponent,
    MigasdepanComponent,
    PaginanoencontradaComponent,
  ],
  imports: [
 
  ],
  exports:[
    CabeceraComponent,
    MenulateralComponent,
    MigasdepanComponent,
    PaginanoencontradaComponent,
  ],
})
export class CompartidoModule { }
