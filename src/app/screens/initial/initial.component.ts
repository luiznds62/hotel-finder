import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-initial",
  templateUrl: "./initial.component.html",
  styleUrls: ["./initial.component.css"],
})
export class InitialComponent implements OnInit {
  city: string;
  initialDate: Date;
  finalDate: Date;

  constructor(private route: Router) {}

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

  getFilters() {
    const filters: any = {};

    if (this.city) {
      filters["city.name"] = this.city;
    }

    if (this.initialDate) {
      filters.initialDate = this.initialDate;
    }

    if (this.finalDate) {
      filters.finalDate = this.finalDate;
    }

    return filters;
  }

  search() {
    this.route.navigate(["./home", this.getFilters()]);
  }
}
