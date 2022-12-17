import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

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
    this.authService.login(this.authForm.value).subscribe();
    console.log(this.authService.getToken());
  }
}
