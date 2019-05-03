import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenulateralComponent } from './menulateral/menulateral.component';
import { MigasdepanComponent } from './migasdepan/migasdepan.component';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';
import { RouterModule } from "@angular/router";
//pipes
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    CabeceraComponent,
    MenulateralComponent,
    MigasdepanComponent,
    PaginanoencontradaComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    PipesModule
  ],
  exports:[
    CabeceraComponent,
    MenulateralComponent,
    MigasdepanComponent,
    PaginanoencontradaComponent,
  ],
})
export class CompartidoModule { }
