import { Routes, RouterModule } from "@angular/router";
import { PaginasComponent } from './paginas.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProgresoComponent } from './progreso/progreso.component';
import { Graficas1Component } from './graficas1/graficas1.component';


 const paginasRoutes: Routes = [
    {
        path: '', component: PaginasComponent,
        children: [
            { path: 'principal', component: PrincipalComponent },
            { path: 'progreso', component: ProgresoComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', redirectTo: '/principal', pathMatch: 'full' },
        ]
    }
];


export const PAGINAS_ROUTES = RouterModule.forChild(paginasRoutes);

