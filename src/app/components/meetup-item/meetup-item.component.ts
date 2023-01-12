import { Component, OnInit, Input } from '@angular/core';
import { IMeetup } from 'src/app/model/meetup';

@Component({
  selector: 'app-meetup-item',
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss'],
})
export class MeetupItemComponent implements OnInit {
  @Input() meetup!: IMeetup;
  showMore: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showMoreHandler() {
    this.showMore = !this.showMore;
    console.log(this.showMore);
  }
}
