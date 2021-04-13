import { EventEmitter, Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-check-in-dates",
  templateUrl: "./check-in-dates.component.html",
  styleUrls: ["./check-in-dates.component.css"],
})
export class CheckInDatesComponent implements OnInit {
  constructor() {}
  @Output() onInitialDatePicked = new EventEmitter();
  @Output() onFinalDatePicked = new EventEmitter();

  initialDate: any;
  finalDate: any;

  ngOnInit() {}

  onChangeInitial(date) {
    this.onInitialDatePicked.emit(date);
  }

  onChangeFinal(date) {
    this.onFinalDatePicked.emit(date);
  }
}
