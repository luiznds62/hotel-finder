import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-initial",
  templateUrl: "./initial.component.html",
  styleUrls: ["./initial.component.css"],
})
export class InitialComponent implements OnInit {
  city: string;
  initialDate: Date;
  finalDate: Date;

  constructor() {}

  ngOnInit() {}

  public getCity(city: string): void {
    this.city = city;
  }

  public getInitialDate(date: Date): void {
    this.initialDate = date;
  }

  public getFinalDate(date: Date): void {
    this.finalDate = date;
  }
}
