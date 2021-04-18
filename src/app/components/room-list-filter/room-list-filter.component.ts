import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../models/room.model';
import {FilterService} from '../../service/FilterService';
import {SortService} from '../../service/SortService';
import {roomsList} from '../../utils/RoomsList';
import {SORT_FIELDS} from '../../utils/SortFields';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-room-list-filter',
  templateUrl: './room-list-filter.component.html',
  styleUrls: ['./room-list-filter.component.css']
})
export class RoomListFilterComponent implements OnInit {

  @Input() rooms: Room[];
  @Output() filterAplied = new EventEmitter();
  sortService: SortService;
  filteredCollection: Room[];

  filters: any = {};

  constructor(private route: ActivatedRoute) {
    this.sortService = new SortService();
  }

  ngOnInit() {
  }

  mergeWithParamsMap() {
    const filterMerged: any = {};
    filterMerged.keys = [];
    filterMerged.params = {};

    const paramsMap: any = this.route.snapshot.paramMap;

    for (const index in paramsMap.keys) {
      if (index) {
        const key = paramsMap.keys[index];
        filterMerged.keys.push(paramsMap.keys[index]);
        filterMerged.params[key] = paramsMap.params[key];
      }
    }

    Object.entries(this.filters).forEach(filter => {
      if (!filterMerged.keys.includes(filter[0])) {
        filterMerged.keys.push(filter[0]);
      }
      filterMerged.params[filter[0]] = filter[1];
    });

    return filterMerged;
  }

  filterUpdated(event) {
    if (event.remove) {
      delete this.filters[event.key];
    } else {
      this.filters[event.key] = event.value;
    }

    FilterService.filterCollection(
      this.sortService.sort(roomsList, SORT_FIELDS.RELEVANCY.value),
      this.mergeWithParamsMap(),
      this.applyFilter
    );
  }

  applyFilter = (filtered) => {
    this.filterAplied.emit(filtered);
  }
}
