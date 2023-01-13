import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthData } from '../model/auth';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = `${environment.backendOrigin}/auth`;
  constructor(private http: HttpClient, private routes: Router) {}
  login(authData: IAuthData) {
    console.log(this.baseUrl);
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, authData)
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('del_todos_auth_token', res.token);
            this.routes.navigate(['meetups']);
            console.log(res);
          }

          return;
        })
      );
  }

  createUser(user: IUser) {
    return this.http.post(`${this.baseUrl}/registration`, user);
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get user(): IUser | null {
    const token = this.getToken();
    if (token) {
      const user: IUser = this.parseJwt(token);
      return user;
    } else return null;
  }

  getToken(): string | null {
    return localStorage.getItem('del_todos_auth_token');
  }

  logout() {
    localStorage.removeItem('del_todos_auth_token');
    this.routes.navigate(['']);
  }
}
