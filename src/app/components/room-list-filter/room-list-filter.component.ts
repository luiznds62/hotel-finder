import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../models/room.model';

@Component({
  selector: 'app-room-list-filter',
  templateUrl: './room-list-filter.component.html',
  styleUrls: ['./room-list-filter.component.css']
})
export class RoomListFilterComponent implements OnInit {

  @Input() rooms: Room[];
  @Output() filterAplied = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  collectionWasFiltered(event) {
    this.filterAplied.emit(event);
  }

}
