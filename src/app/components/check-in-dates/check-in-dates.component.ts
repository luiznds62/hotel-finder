import {EventEmitter, Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-check-in-dates',
  templateUrl: './check-in-dates.component.html',
  styleUrls: ['./check-in-dates.component.css'],
})
export class CheckInDatesComponent implements OnInit {
  constructor() {
  }

  @Output() initialDatePicked = new EventEmitter();
  @Output() finalDatePicked = new EventEmitter();

  initialDate: any;
  finalDate: any;

  ngOnInit() {
  }

  onChangeInitial(date) {
    this.initialDatePicked.emit(date);
  }

  onChangeFinal(date) {
    this.finalDatePicked.emit(date);
  }
}
