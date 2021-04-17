import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListFilterComponent } from './room-list-filter.component';

describe('RoomListFilterComponent', () => {
  let component: RoomListFilterComponent;
  let fixture: ComponentFixture<RoomListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
