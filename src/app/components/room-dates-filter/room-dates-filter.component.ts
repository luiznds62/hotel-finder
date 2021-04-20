import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../models/room.model';

@Component({
  selector: 'app-room-dates-filter',
  templateUrl: './room-dates-filter.component.html',
  styleUrls: ['./room-dates-filter.component.css']
})
export class RoomDatesFilterComponent implements OnInit {

  @Input() rooms: Room[];
  @Output() filterChanged = new EventEmitter();
  initialDate: any;
  finalDate: any;

  constructor() {
  }

  ngOnInit() {

  }

  onChangeInitial() {
    this.filterChanged.emit(this.buildFilter(true));
  }

  onChangeFinal() {
    this.filterChanged.emit(this.buildFilter(false));
  }

  buildFilter(isInitial) {
    return {
      key: isInitial ? 'initialDate' : 'finalDate',
      value: isInitial ? this.initialDate : this.finalDate
    };
  }

}
