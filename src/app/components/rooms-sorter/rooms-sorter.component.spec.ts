import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsSorterComponent } from './rooms-sorter.component';

describe('RoomsSorterComponent', () => {
  let component: RoomsSorterComponent;
  let fixture: ComponentFixture<RoomsSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
