import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginanoencontradaComponent } from './paginas/paginanoencontrada/paginanoencontrada.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ProgresoComponent } from './paginas/progreso/progreso.component';
import { Graficas1Component } from './paginas/graficas1/graficas1.component';
import { CabeceraComponent } from './compartido/cabecera/cabecera.component';
import { MenulateralComponent } from './compartido/menulateral/menulateral.component';
import { MigasdepanComponent } from './compartido/migasdepan/migasdepan.component';
import { PaginasComponent } from './paginas/paginas.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginanoencontradaComponent,
    PrincipalComponent,
    ProgresoComponent,
    Graficas1Component,
    CabeceraComponent,
    MenulateralComponent,
    MigasdepanComponent,
    PaginasComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
