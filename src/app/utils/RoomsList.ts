import { Room, RoomType } from "../models/room.model";
import * as moment from "moment";

export const roomsList: Room[] = [
  {
    name: "Hotel Ibis Budget",
    type: RoomType.HOTEL,
    price: 308,
    promotionalPrice: 300,
    rating: 8.1,
    stars: 4,
    isPopular: true,
    checkInAvailable: moment("2021-04-01") as any,
    checkOutAvailable: moment("2021-04-30") as any,
    evaluations: 28,
    details: {
      haveWiFi: true,
      haveFreeBreakfast: true,
      haveFreeCancelation: true,
      isInCenter: true,
      isTakingSafetyMeasures: true,
    },
    city: {
      name: "Florianópolis",
      state: "Santa Catarina",
    },
    photos: [
      {
        main: true,
        src:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d6/7c/08/duplex-terrace-eiffel.jpg?w=400&h=300&s=1",
      },
    ],
  },
  {
    name: "Hotel Ibis Budget",
    type: RoomType.HOTEL,
    price: 602,
    promotionalPrice: 589,
    rating: 7.2,
    stars: 4,
    isPopular: true,
    checkInAvailable: moment("2021-02-01") as any,
    checkOutAvailable: moment("2021-06-30") as any,
    evaluations: 23,
    details: {
      haveWiFi: true,
      haveFreeBreakfast: false,
      haveFreeCancelation: true,
      isInCenter: false,
      distanceToCenterKM: 0.6,
      isTakingSafetyMeasures: true,
    },
    city: {
      name: "Balneário Camboriú",
      state: "Santa Catarina",
    },
    photos: [
      {
        main: true,
        src:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d6/7c/08/duplex-terrace-eiffel.jpg?w=400&h=300&s=1",
      },
    ],
  },
  {
    name: "Hotel Ibis Budget",
    type: RoomType.HOTEL,
    price: 335,
    promotionalPrice: 225,
    rating: 4.4,
    stars: 4,
    isPopular: true,
    checkInAvailable: moment("2021-04-01") as any,
    checkOutAvailable: moment("2021-04-30") as any,
    evaluations: 19,
    details: {
      haveWiFi: true,
      haveFreeBreakfast: false,
      haveFreeCancelation: true,
      isInCenter: false,
      distanceToCenterKM: 0.6,
      isTakingSafetyMeasures: true,
    },
    city: {
      name: "São Paulo",
      state: "São Paulo",
    },
    photos: [
      {
        main: true,
        src:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d6/7c/08/duplex-terrace-eiffel.jpg?w=400&h=300&s=1",
      },
    ],
  },
  {
    name: "Hotel Ibis Budget",
    type: RoomType.HOTEL,
    price: 247,
    promotionalPrice: 111,
    rating: 1.3,
    stars: 4,
    isPopular: true,
    checkInAvailable: moment("2021-06-01") as any,
    checkOutAvailable: moment("2021-08-30") as any,
    evaluations: 16,
    details: {
      haveWiFi: true,
      haveFreeBreakfast: false,
      haveFreeCancelation: true,
      isInCenter: false,
      distanceToCenterKM: 0.6,
      isTakingSafetyMeasures: true,
    },
    city: {
      name: "Salvador",
      state: "Bahia",
    },
    photos: [
      {
        main: true,
        src:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d6/7c/08/duplex-terrace-eiffel.jpg?w=400&h=300&s=1",
      },
    ],
  },
];
