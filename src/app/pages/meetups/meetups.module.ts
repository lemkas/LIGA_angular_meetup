import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupsComponent } from './meetups.component';
import { MeetupListComponent } from 'src/app/components/meetup-list/meetup-list.component';

@NgModule({
  declarations: [MeetupsComponent, MeetupListComponent],
  imports: [CommonModule],
})
export class MeetupsModule {}
