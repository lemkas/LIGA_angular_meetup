import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMeetup } from '../model/meetup';

@Injectable({
  providedIn: 'root',
})
export class MeetupService {
  reloadMeetups = new Subject<IMeetup[]>();
  timer: any;
  private baseUrl: string = `${environment.backendOrigin}/meetup`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<IMeetup[]> {
    return this.http.get<any>(this.baseUrl);
  }

  createMeetup(data: IMeetup) {
    return this.http.post(this.baseUrl, data);
  }

  refreshMeetups() {
    this.timer = setInterval(() => {
      return this.getAll().subscribe((meetup) => console.log(meetup));
    }, 5000);
  }

  timerDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
