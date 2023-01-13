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
    const formData = this.createForm.value;
    const editedUser = {
      id: this.user.id,
      email: formData.email,
      password: formData.password,
      fio: formData.fio,
    };

    this.showFormToggle();
    this.createForm.reset();
    this.updateUserHandler.emit(editedUser);
  }

  deletedUser(id: number) {
    this.deleteUserHandler.emit(id);
  }
}
