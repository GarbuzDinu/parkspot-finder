export type TimeSlot = {
  hour: number; // 0–23
  available: boolean;
};

export type BookingRequest = {
  parkingId: number;
  date: string;       // YYYY-MM-DD
  startHour: number;  // 0–23
  duration: number;   // hours
};
