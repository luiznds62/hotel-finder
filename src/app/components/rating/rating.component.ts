import { Component, Input, OnInit } from "@angular/core";
import { RatingEvaluation } from "../../models/rating-evaluation.model";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"],
})
export class RatingComponent implements OnInit {
  @Input() rating: number;

  ratingClass: Object = { "rating-excelent": true };
  description: string = "Excelente";

  constructor() {}

  ngOnInit() {
    this.formatRatings(this.rating);
  }

  formatRatings(rating) {
    if (rating >= 0 && rating <= 2) {
      this.ratingClass = { "rating-awful": true };
      this.description = RatingEvaluation.PESSIMO;
    } else if (rating >= 3 && rating <= 5) {
      this.ratingClass = { "rating-bad": true };
      this.description = RatingEvaluation.RUIM;
    } else if (rating >= 6 && rating <= 8) {
      this.ratingClass = { "rating-good": true };
      this.description = RatingEvaluation.BOM;
    } else if (rating > 8) {
      this.ratingClass = { "rating-excelent": true };
      this.description = RatingEvaluation.EXCELENTE;
    }
  }
}
