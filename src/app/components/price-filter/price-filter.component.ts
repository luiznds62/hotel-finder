import { Room } from './../../models/room.model';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as noUiSlider from 'nouislider';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
    selector: 'app-price-filter',
    templateUrl: './price-filter.component.html',
    styleUrls: ['./price-filter.component.css'],
})
export class PriceFilterComponent implements OnInit {
    @Input() rooms: Room[];
    prices: number[];

    minPrice: number = 0;
    maxPrice: number = 0;

    constructor() {}

    ngOnInit() {
        this.prices = this.rooms.map((room: Room) => {
            if (room.promotionalPrice) {
                return room.promotionalPrice;
            } else {
                return room.price;
            }
        });

        this.getMaxPrice(this.prices);
        this.createSlider(this.minPrice, this.maxPrice);
    }

    createSlider(min, max) {
        const slider: any = document.getElementById('slider');
        noUiSlider.cssClasses.handle += ' handlers';
        noUiSlider.cssClasses.connect += ' connect';

        noUiSlider.create(slider, {
            start: [min, max],
            connect: true,
            step: 5,
            range: {
                min: min,
                max: max,
            },
        });

        slider.noUiSlider.on('set.one', (values) => {
            this.minPrice = Math.ceil(values[0]);
            this.maxPrice = Math.ceil(values[1]);
        });
    }

    getMaxPrice(pricesArray) {
        this.maxPrice = Math.max.apply(Math, pricesArray);
    }
}
