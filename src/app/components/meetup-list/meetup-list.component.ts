import { Component, OnInit, Input } from '@angular/core';
import { IMeetup } from 'src/app/model/meetup';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.scss'],
})
export class MeetupListComponent implements OnInit {
  @Input() meetups!: IMeetup[];
  constructor(private meetupService: MeetupService) {}

  ngOnInit(): void {}
}
