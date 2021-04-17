import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../../models/room.model';
import { FilterService } from '../../service/FilterService';
import { SortService } from '../../service/SortService';
import { DEBOUNCE_ROOM_TIME } from '../../utils/RoomsList';
import { SORT_FIELDS } from '../../utils/SortFields';

@Component({
    selector: 'app-rooms-list',
    templateUrl: './rooms-list.component.html',
    styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit {
    sortService: SortService;
    @Input() rooms: Room[];

    currentPage: number = 1;
    sortAttributes: any = SORT_FIELDS;
    sortBy: string = this.sortAttributes.RELEVANCY.value;
    loading: boolean = false;

    constructor() {
        this.sortService = new SortService();
    }

    ngOnInit() {}

    onChangeOrderBy() {
        this.setRoomsWithDebounce();
    }

    pageChanged(event) {
        this.currentPage = event;
    }

    setRoomsWithDebounce() {
        this.loading = true;
        setTimeout(() => {
            this.rooms = this.sortService.sort(this.rooms, this.sortBy);
            this.loading = false;
        }, DEBOUNCE_ROOM_TIME);
    }
}
