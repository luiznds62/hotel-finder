import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../models/room.model';

@Component({
  selector: 'app-room-details-filter',
  templateUrl: './room-details-filter.component.html',
  styleUrls: ['./room-details-filter.component.css'],
})
export class RoomDetailsFilterComponent implements OnInit {
  @Input() rooms: Room[];
  @Output() filterChanged = new EventEmitter();

  haveWiFi: boolean;
  haveFreeBreakfast: boolean;
  haveFreeParkingSpace: boolean;
  haveTv: boolean;
  haveRestaurant: boolean;
  roomsQuantityForDetails: any = {};

  constructor() {
  }

  ngOnInit() {
    this.setRoomQuantity();
  }

  onChanged(attrb) {
    this.filterCollection({ key: `details.${attrb}`, value: this[attrb], remove: !this[attrb]});
  }

  filterCollection(filters: any) {
    this.filterChanged.emit(filters);
  }

  setRoomQuantity() {
    this.roomsQuantityForDetails.haveWifi = 0;
    this.roomsQuantityForDetails.haveFreeBreakfast = 0;
    this.roomsQuantityForDetails.haveFreeParkingSpace = 0;
    this.roomsQuantityForDetails.haveTv = 0;
    this.roomsQuantityForDetails.haveRestaurant = 0;

    this.rooms.forEach((room: Room) => {
      if (room.details.haveWiFi) {
        this.roomsQuantityForDetails.haveWifi++;
      }
      if (room.details.haveFreeBreakfast) {
        this.roomsQuantityForDetails.haveFreeBreakfast++;
      }
      if (room.details.haveFreeParkingSpace) {
        this.roomsQuantityForDetails.haveFreeParkingSpace++;
      }
      if (room.details.haveTv) {
        this.roomsQuantityForDetails.haveTv++;
      }
      if (room.details.haveRestaurant) {
        this.roomsQuantityForDetails.haveRestaurant++;
      }
    });
  }
}
