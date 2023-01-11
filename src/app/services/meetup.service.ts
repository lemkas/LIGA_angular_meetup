import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMeetup } from '../model/meetup';

@Injectable({
  providedIn: 'root',
})
export class MeetupService {
  private baseUrl: string = `${environment.backendOrigin}/meetup`;
  constructor(private http: HttpClient) {}

  getAll() {
    console.log(this.baseUrl);
    return this.http.get<IMeetup[]>(this.baseUrl);
  }
}
