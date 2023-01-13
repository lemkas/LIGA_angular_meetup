import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MeetupsComponent } from './pages/meetups/meetups.component';
import { MeetupItemComponent } from './components/meetup-item/meetup-item.component';
import { MeetupListComponent } from './components/meetup-list/meetup-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateMeetupComponent } from './pages/create-meetup/create-meetup.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { MatInputModule } from '@angular/material/input';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'meetups', component: MeetupsComponent },
  { path: 'my-meetups', component: MeetupsComponent },
  { path: 'users', component: AdminComponent },
  { path: 'meetups/create', component: CreateMeetupComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
  ],
  declarations: [
    AuthComponent,
    MeetupItemComponent,
    MeetupListComponent,
    MeetupsComponent,
    CreateMeetupComponent,
    CreateFormComponent,
    AdminComponent,
    UserListComponent,
    UserItemComponent,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
