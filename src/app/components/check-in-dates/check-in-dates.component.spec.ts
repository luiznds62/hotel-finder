import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInDatesComponent } from './check-in-dates.component';

describe('CheckInDatesComponent', () => {
  let component: CheckInDatesComponent;
  let fixture: ComponentFixture<CheckInDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
