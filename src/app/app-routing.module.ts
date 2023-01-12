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

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'meetups', component: MeetupsComponent },
  { path: 'my-meetups', component: MeetupsComponent },
  { path: 'users', component: AdminComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
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
