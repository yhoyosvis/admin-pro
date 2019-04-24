import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './paginas/principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ProgresoComponent } from './paginas/progreso/progreso.component';
import { Graficas1Component } from './paginas/graficas1/graficas1.component';
import { PaginanoencontradaComponent } from './compartido/paginanoencontrada/paginanoencontrada.component';
import { PaginasComponent } from './paginas/paginas.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'**', component: PaginanoencontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
