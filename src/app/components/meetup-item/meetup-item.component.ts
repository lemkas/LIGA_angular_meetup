import { Component, OnInit, Input } from '@angular/core';

import { IMeetup } from 'src/app/model/meetup';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-meetup-item',
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss'],
})
export class MeetupItemComponent implements OnInit {
  @Input() meetup!: IMeetup;
  @Input() userInfo!: IUser | null;
  ownerFlag!: boolean;
  showMore: boolean = false;
  constructor() {}
  checkMeetupOwner() {
    this.ownerFlag = this.meetup.createdBy === this.userInfo?.id;
  }
  ngOnInit(): void {
    this.checkMeetupOwner();
  }

  showMoreHandler() {
    this.showMore = !this.showMore;
    console.log(this.showMore);
  }
}
