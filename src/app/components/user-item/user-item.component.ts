import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user!: IUser;
  @Output() deleteUserHandler = new EventEmitter();
  @Output() updateUserHandler = new EventEmitter();
  createForm!: FormGroup;
  showForm: boolean = false;
  constructor(private fb: FormBuilder) {}

  initForm() {
    this.createForm = this.fb.group({
      email: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required],
      fio: [this.user.fio, Validators.required],
    });
  }

  showFormToggle() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {
    this.initForm();
  }

  editedUser() {
    this.updateUserHandler.emit(this.createForm.value);
    this.showFormToggle();
    this.createForm.reset();
  }

  deletedUser(id: number) {
    this.deleteUserHandler.emit(id);
  }
}
