import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { IMeetup } from 'src/app/model/meetup';
import { IUser } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss'],
})
export class MeetupListComponent implements OnInit {
  meetups: IMeetup[] = [];
  userInfo!: IUser | null;
  subscription!: Subscription;
  constructor(
    private meetupService: MeetupService,
    private authService: AuthService,
    private router: Router
  ) {}

  createMeetupHandler() {
    this.router.navigate(['meetups/create']);
  }

  getMeetups() {
    this.userInfo = this.authService.user;
    if (this.router.url.includes('my-meetups')) {
      this.subscription = this.meetupService.getAll().subscribe((meetups) => {
        this.meetups = meetups.filter(
          (meetup) => meetup.createdBy === this.userInfo?.id
        );
      });
    } else {
      this.subscription = this.meetupService.getAll().subscribe((meetups) => {
        this.meetups = meetups;
      });
    }
  }

  refreshMeetups() {
    this.subscription = this.meetupService.reloadMeetups.subscribe((value) => {
      this.meetups = value;
      console.log(value, 'from reloader');
    });
    this.meetupService.refreshMeetups();
  }

  ngOnInit(): void {
    this.getMeetups();
    this.refreshMeetups();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.meetupService.timerDestroy();
  }
}
