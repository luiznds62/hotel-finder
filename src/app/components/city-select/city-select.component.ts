import {EventEmitter, Component, OnInit, Output} from '@angular/core';
import {City} from '../../models/city.model';
import {citiesList} from '../../utils/CitiesList';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.css'],
})
export class CitySelectComponent implements OnInit {
  @Output() cityPicked = new EventEmitter();
  city: any = 'default';
  cities: City[] = citiesList;

  constructor() {
  }

  ngOnInit() {
  }

  onChangeCity(city: string) {
    this.cityPicked.emit(city);
  }
}
