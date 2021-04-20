import {City} from './city.model';
import {RoomDetails} from './room-details.model';

export enum RoomType {
  ROOM = 'Room',
  HOTEL = 'Hotel',
}

export interface Photo {
  main: boolean;
  src: string;
}

export class Room {
  id: number;
  name: string;
  type: RoomType;
  price: number;
  promotionalPrice: number;
  isPopular: boolean;
  rating: number;
  stars: number;
  relevancy?: number;
  evaluations: number;
  details: RoomDetails;
  city: City;
  location: string;
  photos: Photo[];
  checkInAvailable: any;
  checkOutAvailable: any;
  lat: number;
  lng: number;
}
