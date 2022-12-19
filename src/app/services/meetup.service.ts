import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeetupService {
  private baseUrl: string = environment.backendOrigin;
  constructor(private http: HttpClient) {}

  getAll() {}
}
