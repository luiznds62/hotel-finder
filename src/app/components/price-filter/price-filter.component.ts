import {Room} from './../../models/room.model';
import {Input, Output, EventEmitter} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as noUiSlider from 'nouislider';
import {FilterService} from '../../service/FilterService';
import {SORT_FIELDS} from '../../utils/SortFields';
import {SortService} from '../../service/SortService';
import {roomsList} from '../../utils/RoomsList';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.css'],
})
export class PriceFilterComponent implements OnInit {
  @Input() rooms: Room[];
  @Output() priceChangedEmitter = new EventEmitter();

  sortService: SortService;
  prices: Number[];
  minPrice: any = 0;
  maxPrice: any = 0;
  paramMap: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.sortService = new SortService();
  }

  ngOnInit() {
    let startValue = 0;
    let finalValue;

    this.paramMap = this.activatedRoute.snapshot.paramMap;

    this.prices = this.rooms.map((room: Room) => {
      if (room.promotionalPrice) {
        return room.promotionalPrice;
      } else {
        return room.price;
      }
    });

    this.getMaxPrice(this.prices);

    if (this.paramMap.params.price) {
      const prices = this.paramMap.params.price.split(',');
      startValue = parseFloat(prices[0]);
      finalValue = parseFloat(prices[1]);
      this.minPrice = startValue;
    } else {
      finalValue = Number(this.maxPrice);
    }

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
    const routeParams = this.buildFilter(this.paramMap, values);

    FilterService.filterCollection(
      this.sortService.sort(roomsList, SORT_FIELDS.RELEVANCY.value),
      routeParams,
      this.onLoadPage
    );
  }

  buildFilter(paramsMap: any, values: Number[]) {
    const filterParams: any = {};
    filterParams.keys = paramsMap.keys;
    filterParams.params = {};

    for (const param in paramsMap.params) {
      filterParams.params[param] = paramsMap.params[param];
    }

    if (filterParams.keys['price']) {
      filterParams.params['price'] = values;
    } else {
      filterParams.keys.push('price');
      filterParams.params['price'] = values;
    }

    return filterParams;
  }

  onLoadPage = (rooms: Room[]) => {
    this.priceChangedEmitter.emit(rooms);
  }
}
