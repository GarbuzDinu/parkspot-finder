import { useParams } from "react-router-dom";
import { useState } from "react";
import { parkingLocations } from "@/data/parkingLocations";
import { Button } from "@/components/ui/button";

export default function ParkingDetails() {
  const { id } = useParams();
  const parking = parkingLocations.find((p) => p.id === Number(id));

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  if (!parking) {
    return <div className="p-20">Parking not found</div>;
  }

  const handleBooking = () => {
    if (!date || !startTime || !endTime) {
      alert("Please select date and time");
      return;
    }

    console.log({
      parkingId: parking.id,
      date,
      startTime,
      endTime,
    });

    // 🔥 Here you will later call your backend API
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-10">{parking.name}</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800"
            alt={parking.name}
            className="rounded-2xl w-full h-80 object-cover mb-6"
          />

          {/* Details BELOW image */}
          <div className="space-y-3">
            <p className="text-muted-foreground">{parking.address}</p>

            <p>
              <strong>Rating:</strong> {parking.rating}
            </p>
            <p>
              <strong>Total Slots:</strong> {parking.totalSlots}
            </p>
            <p>
              <strong>Free Slots:</strong> {parking.freeSlots}
            </p>
            <p>
              <strong>Location:</strong> {parking.lat}, {parking.lng}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — BOOKING ONLY */}
        <div className="bg-card p-8 rounded-2xl shadow-lg space-y-5 sticky top-24">
          <h2 className="text-xl font-semibold">Select Date & Time</h2>

          {/* Date */}
          <div>
            <label className="block text-sm mb-1">Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Start Time */}
          <div>
            <label className="block text-sm mb-1">Start Time</label>
            <input
              type="time"
              className="w-full border rounded-lg px-3 py-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>

          {/* End Time */}
          <div>
            <label className="block text-sm mb-1">End Time</label>
            <input
              type="time"
              className="w-full border rounded-lg px-3 py-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>

          <Button
            className="w-full"
            disabled={
              parking.freeSlots === 0 || !date || !startTime || !endTime
            }
            onClick={handleBooking}
          >
            {parking.freeSlots === 0 ? "No Slots Available" : "Confirm Booking"}
          </Button>
        </div>
      </div>
    </div>
  );
}
