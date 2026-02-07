export type ParkingLocation = {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  totalSlots: number;
  freeSlots: number;
  rating: number;
};
export const parkingLocations: ParkingLocation[] = [
  {
    id: 1,
    name: "Parking – Stefan cel Mare Blvd",
    address: "Stefan cel Mare 1, Chișinău",
    lat: 47.0246,
    lng: 28.8326,
    totalSlots: 20,
    freeSlots: 5,
    rating: 4.6,
  },
  {
    id: 2,
    name: "Parking – Cathedral Park",
    address: "Cathedral Park, Chișinău",
    lat: 47.0259,
    lng: 28.8347,
    totalSlots: 15,
    freeSlots: 2,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Parking – National Opera",
    address: "Opera Square, Chișinău",
    lat: 47.0223,
    lng: 28.8381,
    totalSlots: 12,
    freeSlots: 0,
    rating: 4.4,
  },
  {
    id: 4,
    name: "Parking – Central Market",
    address: "Central Market, Chișinău",
    lat: 47.0186,
    lng: 28.8414,
    totalSlots: 30,
    freeSlots: 11,
    rating: 4.1,
  },
  {
    id: 5,
    name: "Parking – Valea Morilor",
    address: "Valea Morilor Park",
    lat: 47.0207,
    lng: 28.8124,
    totalSlots: 25,
    freeSlots: 18,
    rating: 4.7,
  },
];
