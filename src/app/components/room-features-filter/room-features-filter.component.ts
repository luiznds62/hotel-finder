import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../models/room.model';

@Component({
  selector: 'app-room-features-filter',
  templateUrl: './room-features-filter.component.html',
  styleUrls: ['./room-features-filter.component.css']
})
export class RoomFeaturesFilterComponent implements OnInit {
  @Input() rooms: Room[];
  @Output() filterChanged = new EventEmitter();

  isTakingSafetyMeasures: boolean;
  isInCenter: boolean;
  haveFreeCancelation: boolean;
  roomsQuantityForDetails: any = {};

  constructor() {
  }

  ngOnInit() {
    this.setRoomQuantity();
  }

  onChanged(attrb) {
    this.filterCollection({key: `details.${attrb}`, value: this[attrb], remove: !this[attrb]});
  }

  filterCollection(filters: any) {
    this.filterChanged.emit(filters);
  }

  setRoomQuantity() {
    this.roomsQuantityForDetails.isTakingSafetyMeasures = 0;
    this.roomsQuantityForDetails.isInCenter = 0;
    this.roomsQuantityForDetails.haveFreeCancelation = 0;

    this.rooms.forEach((room: Room) => {
      if (room.details.isTakingSafetyMeasures) {
        this.roomsQuantityForDetails.isTakingSafetyMeasures++;
      }
      if (room.details.isInCenter) {
        this.roomsQuantityForDetails.isInCenter++;
      }
      if (room.details.haveFreeCancelation) {
        this.roomsQuantityForDetails.haveFreeCancelation++;
      }
    });
  }

}
