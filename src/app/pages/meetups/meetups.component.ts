import { Component, OnInit } from '@angular/core';
import { MeetupService } from 'src/app/services/meetup.service';
import { IMeetup } from 'src/app/model/meetup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss'],
})
export class MeetupsComponent implements OnInit {
  meetups: IMeetup[] = [];
  constructor(
    private meetupService: MeetupService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.meetupService.getAll().subscribe((meetups) => {
      this.meetups = meetups;
      console.log(this.meetups);
    });

    console.log(this.authService.user);
  }
}
