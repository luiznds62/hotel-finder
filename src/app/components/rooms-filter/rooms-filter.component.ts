import { Component, Input, OnInit } from "@angular/core";
import { Room } from "../../models/room.model";

@Component({
  selector: "app-rooms-filter",
  templateUrl: "./rooms-filter.component.html",
  styleUrls: ["./rooms-filter.component.css"],
})
export class RoomsFilterComponent implements OnInit {
  @Input() rooms: Room[];

  constructor() {}

  ngOnInit() {}
}
