import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initAuthForm();
  }

  initAuthForm() {
    this.authForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit() {
    console.log(this.authForm.value);
  }
}
