import { Component, Input, OnInit } from "@angular/core";
import { Room } from "../../models/room.model";

@Component({
  selector: "app-room-list-item",
  templateUrl: "./room-list-item.component.html",
  styleUrls: ["./room-list-item.component.css"],
})
export class RoomListItemComponent implements OnInit {
  @Input() room: Room;

  constructor() {}

  ngOnInit() {
    console.log(this.room);
  }
}
