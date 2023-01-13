import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../model/user';
import { BehaviorSubject, Subject, map, Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  reloadUsers = new Subject<IUser[]>();
  timer: any;
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

  updateUser(editedUser: IUser) {
    return this.http.put<IUser>(`${this.baseUrl}/${editedUser.id}`, editedUser);
  }

  refreshUsers() {
    // this.timer = setInterval(() => {
    // return this.http.get<IUser[]>(this.baseUrl).pipe(
    //   interval(1000)
    // );
    // }, 5000);
  }

  timerDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
