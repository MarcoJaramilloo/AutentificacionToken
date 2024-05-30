import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  constructor(public userService: UsersService) {}
  
}
