import {City} from './../../models/city.model';
import {Component, OnInit} from '@angular/core';
import {citiesList} from '../../utils/CitiesList';
import {Router} from '@angular/router';
import {roomsList} from '../../utils/RoomsList';
import {Room} from '../../models/room.model';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css'],
})
export class CitiesListComponent implements OnInit {
  cities: City[] = citiesList;
  rooms: any = roomsList;
  citiesData: any = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.cities.forEach((city) => {
      const roomsFromCity = this.rooms.filter(
        (room) => room.city.name === city.name
      );

      (<any>city).averages = this.getAverages(roomsFromCity);
    });
  }

  getAverages(roomsFromCity: Room[]): any {
    const roomsLength = roomsFromCity.length;
    let pricesSum = 0;
    let starsSum = 0;
    let evaluationsSum = 0;

    roomsFromCity.forEach(function (room) {
      pricesSum = room.price + pricesSum;
      starsSum = room.stars + starsSum;
      evaluationsSum = room.evaluations + evaluationsSum;
    });

    return {
      averagePrice: pricesSum > 0 && pricesSum / roomsLength,
      averageStars: starsSum > 0 && Math.ceil(starsSum / roomsLength),
      averageEvaluations: evaluationsSum > 0 && Math.ceil(evaluationsSum / roomsLength)
    };
  }

  navigateToRooms(city: City) {
    this.router.navigate(['./home', {'city.name': city.name}]);
  }
}
