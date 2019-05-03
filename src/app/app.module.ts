import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';

//componenetes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Moduloss
import { PaginasModule } from "./paginas/paginas.module";
import { ServicioModule } from "./servicios/servicio.module";


//Rutas
import { APP_ROUTES } from './app.routes';

//temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   

  ],
  imports: [
   //AppRoutingModule,
    BrowserModule,
    ServicioModule,
    APP_ROUTES,
    PaginasModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
