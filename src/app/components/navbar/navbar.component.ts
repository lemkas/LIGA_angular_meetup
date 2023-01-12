import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}
  token!: string | null;
  getToken() {
    this.token = this.authService.getToken();
    console.log('token', this.token);
  }

  ngOnInit(): void {
    this.getToken();
  }

  logoutHandler() {
    this.authService.logout();
    this.getToken();
  }
}
