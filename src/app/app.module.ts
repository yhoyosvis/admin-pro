import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';

//componenetes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//Moduloss
import { PaginasModule } from "./paginas/paginas.module";

//Rutas
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
   //AppRoutingModule,
    BrowserModule,
    APP_ROUTES,
    PaginasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
