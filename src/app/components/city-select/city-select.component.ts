import { EventEmitter, Component, OnInit, Output } from "@angular/core";
@Component({
  selector: "app-city-select",
  templateUrl: "./city-select.component.html",
  styleUrls: ["./city-select.component.css"],
})
export class CitySelectComponent implements OnInit {
  @Output() onCityPicked = new EventEmitter();
  city: any = "default";

  constructor() {}

  ngOnInit() {}

  onChangeCity(city: string) {
    this.onCityPicked.emit(city);
  }
}
