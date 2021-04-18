import {Room} from './../../models/room.model';
import {Input, Output, EventEmitter} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import * as noUiSlider from 'nouislider';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css'],
})
export class PriceFilterComponent implements OnInit {
  @Input() rooms: Room[];
  @Output() filterChanged = new EventEmitter();

  prices: Number[];
  minPrice: any = 0;
  maxPrice: any = 0;

  constructor() {
  }

  ngOnInit() {
    const startValue = 0;
    let finalValue;

    this.prices = this.rooms.map((room: Room) => {
      if (room.promotionalPrice) {
        return room.promotionalPrice;
      } else {
        return room.price;
      }
    });

    this.getMaxPrice(this.prices);

    finalValue = Number(this.maxPrice);

    this.createSlider(this.minPrice, this.maxPrice, startValue, finalValue);
  }

  createSlider(min, max, startValue, finalValue) {
    const slider: any = document.getElementById('slider');
    noUiSlider.cssClasses.handle += ' handlers';
    noUiSlider.cssClasses.connect += ' connect';

    noUiSlider.create(slider, {
      start: [startValue, finalValue],
      connect: true,
      step: 5,
      range: {
        min: 0,
        max: max,
      },
    });

    slider.noUiSlider.on('set.one', (values) => {
      this.minPrice = Math.ceil(values[0]);
      this.maxPrice = Math.ceil(values[1]);
      this.filterCollection(values);
    });
  }

  getMaxPrice(pricesArray) {
    this.maxPrice = Math.max.apply(Math, pricesArray);
  }

  filterCollection(values: Number[]) {
    this.filterChanged.emit(this.buildFilter(values));
  }

  buildFilter(values: Number[]) {
    return {key: 'price', value: values};
  }
}
