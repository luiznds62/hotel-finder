import { Component, Input, OnInit } from "@angular/core";
import { Room, RoomType } from "../../models/room.model";

@Component({
  selector: "app-rooms-list",
  templateUrl: "./rooms-list.component.html",
  styleUrls: ["./rooms-list.component.css"],
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: Room[];

  currentPage: number = 1;

  constructor() {}

  ngOnInit() {}

  filterByName(room: Room) {
    return true;
  }

  pageChanged(event) {
    this.currentPage = event;
  }
}