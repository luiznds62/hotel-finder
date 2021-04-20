import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFeaturesFilterComponent } from './room-features-filter.component';

describe('RoomFeaturesFilterComponent', () => {
  let component: RoomFeaturesFilterComponent;
  let fixture: ComponentFixture<RoomFeaturesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomFeaturesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomFeaturesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
