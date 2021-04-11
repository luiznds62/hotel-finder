import { Component, Input, OnInit } from "@angular/core";
import { RatingEvaluation } from "../../models/rating-evaluation.model";
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

  formatRatings(rating) {
    if (rating >= 0 && rating <= 2) {
      return RatingEvaluation.PESSIMO;
    } else if (rating >= 3 && rating <= 5) {
      return RatingEvaluation.RUIM;
    } else if (rating >= 6 && rating <= 8) {
      return RatingEvaluation.BOM;
    } else if (rating > 8) {
      return RatingEvaluation.EXCELENTE;
    }
  }
}
