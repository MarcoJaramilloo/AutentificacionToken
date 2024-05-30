import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,  private cookies: CookieService, private router:Router ) {}

  login(user: any): Observable<any> {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", user);
  }
  register(user: any): Observable<any> {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", user);
  }
  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
  logout() {
    // Eliminar el token de autenticación
    this.cookies.delete("token");
    
    // Redirigir al usuario a la página de inicio de sesión o a la página principal
    this.router.navigateByUrl("/login"); // Cambia "/login" por la ruta adecuada
  }
  checkUserExists(email: string): Observable<boolean> {
    // Realiza una solicitud HTTP al backend para verificar si el usuario está registrado
    return this.http.get<boolean>(`https://tu-api.com/verificar-usuario/${email}`);
  }
}
