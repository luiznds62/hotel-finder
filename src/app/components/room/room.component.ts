import { FilterService } from "./../../utils/FilterService";
import { Component, OnInit } from "@angular/core";
import { Room } from "../../models/room.model";
import { roomsList } from "../../utils/RoomsList";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"],
})
export class RoomComponent implements OnInit {
  rooms: Room[];
  filters: any;

  constructor(private route: ActivatedRoute) {}

  onLoadPage= (collection: Room[]) => {
    this.rooms = collection;
  }

  ngOnInit() {
    FilterService.filterCollection(
      roomsList,
      this.route.snapshot.paramMap,
      this.onLoadPage
    );
  }
}
