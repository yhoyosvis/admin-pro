import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PaginanoencontradaComponent } from './compartido/paginanoencontrada/paginanoencontrada.component';



const appRoutes: Routes =[
    {path:'login', component: LoginComponent },
    {path:'register', component: RegisterComponent },
    {path:'**', component: PaginanoencontradaComponent}
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes,  {useHash: true});