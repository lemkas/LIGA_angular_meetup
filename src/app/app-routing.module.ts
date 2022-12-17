import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  declarations: [AuthComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {}
