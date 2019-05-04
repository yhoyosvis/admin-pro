import { Routes, RouterModule } from "@angular/router";
import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ConfiguracionesCuentaComponent } from './configuraciones-cuenta/configuraciones-cuenta.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SesionGuard } from '../servicios/index.service';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



 const paginasRoutes: Routes = [
    {
        path: '', component: PaginasComponent,
        canActivate:[SesionGuard],
        children: [
            { path: 'principal', component: PrincipalComponent, data: {titulo: 'Principal'} },
            { path: 'progreso', component: ProgresoComponent, data: {titulo: 'Progreso'} },
            { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Graficas'} },
            { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
            { path: 'configuraciones-cuenta', component: ConfiguracionesCuentaComponent, data: {titulo: 'Temas'} },
            { path: 'perfil', component: PerfilComponent, data: {titulo: 'Perfil de Usuario'} },
            { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs'} },


            //mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de usuarios'} },

            { path: '', redirectTo: '/principal', pathMatch: 'full' },
        ]
    }
];


export const PAGINAS_ROUTES = RouterModule.forChild(paginasRoutes);

