export type ParkingLocation = {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  totalSlots: number;
  freeSlots: number;
  rating: number;

  image: string;
  pricePerHour: number;
  availability: string;
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
    pricePerHour: 10,
    availability: "18:00 - 02:00",
    image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400",
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
    pricePerHour: 12,
    availability: "24/7",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400",
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
    pricePerHour: 8,
    availability: "08:00 - 22:00",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400",
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
    pricePerHour: 6,
    availability: "06:00 - 20:00",
    image:
      "https://images.unsplash.com/photo-1517949908116-721c5c1c3c3d?w=400",
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
    pricePerHour: 9,
    availability: "24/7",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400",
  },
];