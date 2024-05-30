import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrecioComponent,
    ProtegidaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: 'dev-w30d7adhhugwwlnj.us.auth0.com',
      clientId: '8nAmrUmgUC6FFy2tfiMsRqGFzhbdP6IW',
      authorizationParams:{
        redirect_uri:window.location.origin
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
