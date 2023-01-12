import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMeetup } from '../model/meetup';

@Injectable({
  providedIn: 'root',
})
export class MeetupService {
  private baseUrl: string = `${environment.backendOrigin}/meetup`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<IMeetup[]> {
    return this.http.get<any>(this.baseUrl);
  }

  createMeetup(data: any) {
    return this.http.post(this.baseUrl, data);
  }
}
