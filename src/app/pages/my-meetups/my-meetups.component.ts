import { Component, OnInit } from '@angular/core';
import { MeetupService } from 'src/app/services/meetup.service';
import { IMeetup } from 'src/app/model/meetup';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-my-meetups',
  templateUrl: './my-meetups.component.html',
  styleUrls: ['./my-meetups.component.scss'],
})
export class MyMeetupsComponent implements OnInit {
  meetups: IMeetup[] = [];
  userInfo: IUser | null = null;
  constructor(
    private meetupService: MeetupService,
    private authService: AuthService
  ) {}

  getMyMeetups() {
    this.userInfo = this.authService.user;

    this.meetupService.getAll().subscribe((meetups) => {
      this.meetups = meetups;
    });
    console.log(this.meetups);
  }
  ngOnInit(): void {
    this.userInfo = this.authService.user;

    this.meetupService.getAll().subscribe((meetups) => {
      this.meetups = meetups;
    });
    console.log(this.meetups);
  }
}
