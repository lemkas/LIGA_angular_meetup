import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
