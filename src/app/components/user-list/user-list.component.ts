import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  createForm!: FormGroup;
  showForm: boolean = false;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  getUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }

  editUser(editedUser: IUser) {
    console.log(editedUser);
  }

  initForm() {
    this.createForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      fio: ['', Validators.required],
    });
  }

  showFormToggle() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    this.authService.createUser(this.createForm.value).subscribe();
    this.createForm.reset();
    this.showFormToggle();
  }

  ngOnInit(): void {
    this.getUsers();
    this.initForm();
  }
}
