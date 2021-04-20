import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDatesFilterComponent } from './room-dates-filter.component';

describe('RoomDatesFilterComponent', () => {
  let component: RoomDatesFilterComponent;
  let fixture: ComponentFixture<RoomDatesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDatesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDatesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
