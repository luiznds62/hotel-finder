import { Room, RoomType } from "../models/room.model";
import * as moment from "moment";

export const roomsList: Room[] = [
  {
    name: "Amazing Flat",
    type: RoomType.HOTEL,
    location: 'Centro',
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
          "assets/room-pattern-1/primary.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-1/second.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-1/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-1/four.jpg",
      },
    ],
  },
  {
    name: "Cozy Flat",
    type: RoomType.HOTEL,
    location: 'Moema',
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
          "assets/room-pattern-2/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/primary.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/four.jpg",
      },
    ],
  },
  {
    name: "Budget Place",
    type: RoomType.HOTEL,
    location: 'Santa Luzia',
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
          "assets/room-pattern-3/primary.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-3/secondary.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-3/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-3/four.jpg",
      },
    ],
  },
  {
    name: "Designer Flat",
    type: RoomType.HOTEL,
    location: 'São Gonçalo',
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
          "assets/room-pattern-4/four.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-4/secondary.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-4/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-4/four.jpg",
      },
    ],
  },
  {
    name: "Lost Studio",
    type: RoomType.HOTEL,
    location: 'Centro',
    price: 247,
    promotionalPrice: 0,
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
          "assets/room-pattern-1/four.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-1/second.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-1/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-1/four.jpg",
      },
    ],
  },
  {
    name: "Central Place",
    type: RoomType.HOTEL,
    location: 'Universitário',
    price: 442,
    promotionalPrice: 332,
    rating: 10,
    stars: 5,
    isPopular: true,
    checkInAvailable: moment("2021-06-01") as any,
    checkOutAvailable: moment("2021-08-30") as any,
    evaluations: 16,
    details: {
      haveWiFi: true,
      haveFreeBreakfast: false,
      haveFreeCancelation: false,
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
          "assets/room-pattern-2/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/second.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/four.jpg",
      },
    ],
  },
  {
    name: "Nice Place",
    type: RoomType.HOTEL,
    location: 'Universitário',
    price: 442,
    promotionalPrice: 332,
    rating: 10,
    stars: 5,
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
          "assets/room-pattern-2/four.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/second.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/four.jpg",
      },
    ],
  },
  {
    name: "Beautiful Flat",
    type: RoomType.HOTEL,
    location: 'Universitário',
    price: 442,
    promotionalPrice: 332,
    rating: 10,
    stars: 5,
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
          "assets/room-pattern-2/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/second.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/third.jpg",
      },
      {
        main: false,
        src:
          "assets/room-pattern-2/four.jpg",
      },
    ],
  },
];
