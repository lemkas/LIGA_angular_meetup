import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../model/user';
import { BehaviorSubject, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = `${environment.backendOrigin}/user`;
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<IUser[]>(this.baseUrl);
  }

  getOneUser(id: number) {
    return this.getAllUsers().pipe(
      map((el) => el.filter((el) => el.id === Number(id)))
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
