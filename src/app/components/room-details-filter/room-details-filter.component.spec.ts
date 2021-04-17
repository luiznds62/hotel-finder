import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailsFilterComponent } from './room-details-filter.component';

describe('RoomDetailsFilterComponent', () => {
  let component: RoomDetailsFilterComponent;
  let fixture: ComponentFixture<RoomDetailsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomDetailsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
