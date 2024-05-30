import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UsersService } from '../../users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public router:Router,public auth: AuthService, public userService: UsersService ) {}
  
  login() {
    this.router.navigateByUrl('/login');
  }
  isAuthenticated(): boolean {
    return !!this.userService.getToken();
  }
  logout() {
    this.userService.logout();
  }
}
