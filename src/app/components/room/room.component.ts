import { Component, OnInit } from "@angular/core";
import { Room, RoomType } from "../../models/room.model";

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"],
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];

  constructor() {
    
  }

  ngOnInit() {
    this.pushRoom();
    this.pushRoom();
  }

  pushRoom() {
    this.rooms.push({
      name: "Hotel Ibis Budget",
      type: RoomType.HOTEL,
      price: 123,
      promotionalPrice: 0,
      rating: 3,
      details: {
        haveWiFi: true,
        haveFreeBreakfast: false,
        isNextToCenter: true,
        isTakingSafetyMeasures: true,
      },
      city: {
        name: "Blumenau",
        state: "Santa Catarina",
      },
      photos: [
        {
          main: true,
          src:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d6/7c/08/duplex-terrace-eiffel.jpg?w=400&h=300&s=1",
        },
      ],
    });
  }
}
