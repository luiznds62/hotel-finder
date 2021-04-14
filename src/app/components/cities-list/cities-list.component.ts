import { City } from "./../../models/city.model";
import { Component, OnInit } from "@angular/core";
import { citiesList } from "../../utils/CitiesList";
import { Router } from "@angular/router";
import { roomsList } from "../../utils/RoomsList";
import { Room } from "../../models/room.model";

@Component({
  selector: "app-cities-list",
  templateUrl: "./cities-list.component.html",
  styleUrls: ["./cities-list.component.css"],
})
export class CitiesListComponent implements OnInit {
  cities: City[] = citiesList;
  rooms: any = roomsList;
  citiesData: any = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cities.forEach((city) => {
      const roomsFromCity = this.rooms.filter(
        (room) => room.city.name === city.name
      );

      (<any>city).averagePrice = this.getAveragePriceFromCity(roomsFromCity);
    });
  }

  getAveragePriceFromCity(roomsFromCity: Room[]): Number {
    let pricesSum = 0;
    let averagePrice = 0;
    roomsFromCity.forEach(function (room) {
      pricesSum = room.price + pricesSum;
    });

    if (pricesSum > 0) {
      averagePrice = pricesSum / roomsFromCity.length;
    }

    return averagePrice;
  }

  navigateToRooms(city: City) {
    this.router.navigate(["./home", { "city.name": city.name }]);
  }
}
