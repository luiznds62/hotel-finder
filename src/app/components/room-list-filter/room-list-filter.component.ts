import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room-list-filter',
  templateUrl: './room-list-filter.component.html',
  styleUrls: ['./room-list-filter.component.css']
})
export class RoomListFilterComponent implements OnInit {

  @Input() rooms: Room; 

  constructor() { }

  ngOnInit() {
  }

}
