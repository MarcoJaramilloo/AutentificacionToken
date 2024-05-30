import { Component } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Fix: Change styleUrl to styleUrls
})
export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string;

  constructor(public userService: UsersService, public router: Router) {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl("/");
        // Limpiar campos después del registro exitoso
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        
        // Mensaje por consola indicando que el registro se ha realizado correctamente
        console.log('Registro exitoso:', data);
      },
      error => {
        console.error('Error en el registro:', error);
      }
    );
  }
  
}
