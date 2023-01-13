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
  }

  isAdmin() {}

  ngOnInit(): void {
    setInterval(() => {
      this.getToken();
    }, 100);
  }

  logoutHandler() {
    this.authService.logout();
    this.token = this.authService.getToken();
  }
}
