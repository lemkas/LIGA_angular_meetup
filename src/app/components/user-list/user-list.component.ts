import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
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
  // timer: any;
  subscription!: Subscription;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  getUsers() {
    this.subscription = this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
    this.getUsers();
  }

  editUser(editedUser: IUser) {
    this.userService.updateUser(editedUser).subscribe();
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

  // refreshUsers() {
  //   this.userService.refreshUsers().subscribe(())
  // }

  ngOnInit(): void {
    this.getUsers();
    this.initForm();
    // this.refreshUsers();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.userService.timerDestroy();
  }
}
