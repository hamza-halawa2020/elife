import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  email: string = 'info@rimansan.net';
  email2: string = 'support@rimansan.net';

  total: number = 0;
  totalNumber: number = 0;
  cartApi: any;
  authService: any;

  constructor() {}

  ngOnInit(): void {
  }

  isLoggedIn(){
  }

  logout() {
  }
}