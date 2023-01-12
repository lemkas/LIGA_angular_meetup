import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MeetupsComponent } from './pages/meetups/meetups.component';
import { MeetupItemComponent } from './components/meetup-item/meetup-item.component';
import { MeetupListComponent } from './components/meetup-list/meetup-list.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'meetups', component: MeetupsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatCardModule,
    CommonModule,
  ],
  declarations: [
    AuthComponent,
    MeetupItemComponent,
    MeetupListComponent,
    MeetupsComponent,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
