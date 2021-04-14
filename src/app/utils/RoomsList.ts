import { RoomType } from "../models/room.model";

export const roomsList = [
  {
    name: "Hotel Ibis Budget",
    type: RoomType.HOTEL,
    price: 123,
    promotionalPrice: 111,
    rating: 8.1,
    stars: 4,
    isPopular: true,
    checkInAvailable: new Date(),
    checkOutAvailable: new Date(),
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
    price: 123,
    promotionalPrice: 111,
    rating: 7.2,
    stars: 4,
    isPopular: true,
    checkInAvailable: new Date(),
    checkOutAvailable: new Date(),
    details: {
      haveWiFi: true,
      haveFreeBreakfast: false,
      haveFreeCancelation: true,
      isInCenter: false,
      distanceToCenterKM: 0.6,
      isTakingSafetyMeasures: true,
    },
    city: {
      name: "Blumenau",
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
    price: 123,
    promotionalPrice: 111,
    rating: 4.4,
    stars: 4,
    isPopular: true,
    checkInAvailable: new Date(),
    checkOutAvailable: new Date(),
    details: {
      haveWiFi: true,
      haveFreeBreakfast: false,
      haveFreeCancelation: true,
      isInCenter: false,
      distanceToCenterKM: 0.6,
      isTakingSafetyMeasures: true,
    },
    city: {
      name: "Blumenau",
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
    price: 123,
    promotionalPrice: 111,
    rating: 1.3,
    stars: 4,
    isPopular: true,
    checkInAvailable: new Date(),
    checkOutAvailable: new Date(),
    details: {
      haveWiFi: true,
      haveFreeBreakfast: false,
      haveFreeCancelation: true,
      isInCenter: false,
      distanceToCenterKM: 0.6,
      isTakingSafetyMeasures: true,
    },
    city: {
      name: "Blumenau",
      state: "Santa Catarina",
    },
    photos: [
      {
        main: true,
        src:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d6/7c/08/duplex-terrace-eiffel.jpg?w=400&h=300&s=1",
      },
    ],
  }
];
