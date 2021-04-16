import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../../models/room.model';
import { SortService } from '../../service/SortService';
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

    constructor() {
        this.sortService = new SortService();
    }

    ngOnInit() {}

    onChangeOrderBy() {
        const rooms = this.sortService.sort(this.rooms, this.sortBy);
        this.rooms = rooms;
    }

    pageChanged(event) {
        this.currentPage = event;
    }
}
