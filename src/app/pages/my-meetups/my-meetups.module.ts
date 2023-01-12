import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMeetupsComponent } from './my-meetups.component';
import { MatCardModule } from '@angular/material/card';
import { MeetupListComponent } from 'src/app/components/meetup-list/meetup-list.component';

@NgModule({
  declarations: [MyMeetupsComponent, MeetupListComponent],
  imports: [CommonModule, MatCardModule],
})
export class MyMeetupsModule {}
