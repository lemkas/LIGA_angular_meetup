import { Component, OnInit } from '@angular/core';
import { IMeetup } from 'src/app/model/meetup';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss'],
})
export class MeetupListComponent implements OnInit {
  meetups: IMeetup[] = [];
  constructor(private meetupService: MeetupService) {}

  ngOnInit(): void {
    this.meetupService.getAll().subscribe((meetups) => {
      this.meetups = meetups;
      console.log(this.meetups);
    });
  }
}
