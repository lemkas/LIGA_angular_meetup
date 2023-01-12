import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MeetupsComponent } from './meetups.component';
import { MeetupListComponent } from 'src/app/components/meetup-list/meetup-list.component';

@NgModule({
  declarations: [MeetupsComponent, MeetupListComponent],
  imports: [CommonModule, MatCardModule],
})
export class MeetupsModule {}
