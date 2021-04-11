import { City } from "./city.model";
import { RoomDetails } from "./room-details.model";

export enum RoomType {
    ROOM = 'Room',
    HOTEL = 'Hotel'
}

export interface Photo {
    main: boolean;
    src: string;
}

export class Room {
    name: string;
    type: RoomType;
    price: number;
    promotionalPrice: number;
    rating: number;
    details: RoomDetails;
    city: City;
    photos: Photo[];
}
