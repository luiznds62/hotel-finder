import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../models/room.model';
import {FilterService} from '../../service/FilterService';
import {roomsList} from '../../utils/RoomsList';
import {SORT_FIELDS} from '../../utils/SortFields';
import {ActivatedRoute} from '@angular/router';
import {SortService} from '../../service/SortService';

@Component({
  selector: 'app-room-details-filter',
  templateUrl: './room-details-filter.component.html',
  styleUrls: ['./room-details-filter.component.css'],
})
export class RoomDetailsFilterComponent implements OnInit {
  @Input() rooms: Room[];
  @Output() detailChangedEmitter = new EventEmitter();

  sortService: SortService;
  haveWiFi: boolean;
  haveFreeBreakfast: boolean;
  haveFreeParkingSpace: boolean;
  haveTv: boolean;
  haveRestaurant: boolean;
  paramMap: any;
  roomsQuantityForDetails: any = {};
  filters: any = {};

  constructor(private activatedRoute: ActivatedRoute) {
    this.sortService = new SortService();
  }

  ngOnInit() {
    this.setRoomQuantity();
    this.paramMap = this.activatedRoute.snapshot.paramMap;
  }

  onChanged(attrb) {
    this.filters[attrb] = this[attrb];
    this.filterCollection(this.filters);
  }

  filterCollection(filters: any) {
    const routeParams = this.buildFilter(this.paramMap, filters);

    FilterService.filterCollection(
      this.sortService.sort(roomsList, SORT_FIELDS.RELEVANCY.value),
      routeParams,
      this.onLoadPage
    );
  }

  buildFilter(paramsMap: any, filters: any) {
    const filterParams: any = {};
    filterParams.keys = paramsMap.keys;
    filterParams.params = {};

    for (const param in paramsMap.params) {
      filterParams.params[param] = paramsMap.params[param];
    }

    Object.entries(filters).forEach(filter => {
      const key = `details.${filter[0]}`;
      filterParams.keys.push(key);
      filterParams.params[key] = filter[1];
    });

    return filterParams;
  }

  onLoadPage = (rooms: Room[]) => {
    this.detailChangedEmitter.emit(rooms);
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
