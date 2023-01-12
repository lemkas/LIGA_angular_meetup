import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetupService } from 'src/app/services/meetup.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  createForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private meetupService: MeetupService,
    private router: Router
  ) {}

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
    const formData: any = this.createForm.value;
    const formatedMeetup: any = {
      name: formData.name,
      description: formData.description,
      time: formData.time + 'T' + formData.hours + ':00.000Z',
      duration: formData.duration,
      location: formData.location,
      target_audience: formData.target_audience,
      need_to_know: formData.need_to_know,
      will_happen: formData.will_happen,
      reason_to_come: formData.reason_to_come,
    };

    this.meetupService.createMeetup(formatedMeetup).subscribe();
    this.router.navigate(['meetups']);
  }
}
