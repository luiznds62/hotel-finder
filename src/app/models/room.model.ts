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
    isPopular: boolean;
    rating: number;
    stars: number;
    evaluations: number;
    details: RoomDetails;
    city: City;
    photos: Photo[];
    checkInAvailable: Date;
    checkOutAvailable: Date;
}
