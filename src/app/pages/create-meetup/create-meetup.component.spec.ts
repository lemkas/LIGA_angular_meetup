import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeetupComponent } from './create-meetup.component';

describe('CreateMeetupComponent', () => {
  let component: CreateMeetupComponent;
  let fixture: ComponentFixture<CreateMeetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMeetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
