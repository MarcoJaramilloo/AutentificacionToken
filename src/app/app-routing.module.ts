import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuard, authGuardFn } from '@auth0/auth0-angular';
import { LoginComponent } from './components/login/login.component'; 
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  
    {path: 'home', component:HomeComponent},
    {path: 'precio', component:PrecioComponent},
    {path: 'protegida', component:ProtegidaComponent,canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent, pathMatch: "full" },
    {path: 'register', component: RegisterComponent, pathMatch: "full" },
    {path: '**', pathMatch:'full', redirectTo:'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
