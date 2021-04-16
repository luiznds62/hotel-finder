import { FilterService } from '../../service/FilterService';
import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room.model';
import { roomsList } from '../../utils/RoomsList';
import { ActivatedRoute } from '@angular/router';
import { SortService } from '../../service/SortService';
import { SORT_FIELDS } from '../../utils/SortFields';
@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
    sortService: SortService;
    DEBOUNCE_TIME: number = 2800;
    rooms: Room[];
    filters: any;
    loading: boolean = false;

    constructor(private route: ActivatedRoute) {
        this.sortService = new SortService();
    }

    onLoadPage = (collection: Room[]) => {
        this.rooms = collection;
    };

    ngOnInit() {
        this.setRoomsWithDebounce(roomsList);
    }

    insertRelevancy(roomList: Room[]) {
        return roomList.map((room: Room) => {
            room.relevancy = this.getRelevancy(room);
            return room;
        });
    }

    getRelevancy(room: Room): number {
        let relevancy = room.rating * room.evaluations + room.stars;
        return relevancy;
    }

    setRoomsWithDebounce(rooms: Room[]) {
        this.loading = true;
        setTimeout(() => {
            this.rooms = this.insertRelevancy(rooms);
            FilterService.filterCollection(
                this.sortService.sort(rooms, SORT_FIELDS.RELEVANCY.value),
                this.route.snapshot.paramMap,
                this.onLoadPage
            );
            this.loading = false;
        }, this.DEBOUNCE_TIME);
    }
}
