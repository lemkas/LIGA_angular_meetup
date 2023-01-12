import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  createForm!: FormGroup;
  constructor(private fb: FormBuilder, private meetupService: MeetupService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      time: ['', Validators.required],
      hours: ['', Validators.required],
      duration: ['', Validators.required],
      location: ['', Validators.required],
      target_audience: ['', Validators.required],
      need_to_know: ['', Validators.required],
      will_happen: ['', Validators.required],
      reason_to_come: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.createForm.value);
  }
}
