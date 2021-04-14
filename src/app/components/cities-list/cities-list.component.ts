import { City } from "./../../models/city.model";
import { Component, OnInit } from "@angular/core";
import { citiesList } from "../../utils/CitiesList";
import { Router } from "@angular/router";

@Component({
  selector: "app-cities-list",
  templateUrl: "./cities-list.component.html",
  styleUrls: ["./cities-list.component.css"],
})
export class CitiesListComponent implements OnInit {
  cities: City[] = citiesList;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToRooms(city: City) {
    this.router.navigate(["./home", { 'city.name': city.name }]);
  }
}
