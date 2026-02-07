import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TimeSlotGrid from "./TimeSlotGrid";

type Props = {
  open: boolean;
  onClose: () => void;
  parkingId: number;
  parkingName: string;
};
type TimeSlot = {
  hour: number;
  available: boolean;
};

const BookingModal = ({ open, onClose, parkingId, parkingName }: Props) => {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState<TimeSlot[]>([]);

  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [duration, setDuration] = useState(1);

  // Simulated availability fetch
  useEffect(() => {
    if (!date) return;

    // Later → fetch from backend
    const fakeAvailability: TimeSlot[] = Array.from({ length: 24 }, (_, h) => ({
      hour: h,
      available: Math.random() > 0.3,
    }));

    setSlots(fakeAvailability);

    setSlots(fakeAvailability);
    setSelectedHour(null);
  }, [date]);

  const handleConfirm = () => {
    if (selectedHour === null) return;

    const booking = {
      parkingId,
      date,
      startHour: selectedHour,
      duration,
    };

    console.log("Booking request:", booking);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Book Parking – {parkingName}</DialogTitle>
        </DialogHeader>

        {/* Date picker */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              className="w-full mt-1 border rounded-lg px-3 py-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {date && (
            <>
              <TimeSlotGrid
                slots={slots}
                selectedHour={selectedHour}
                onSelect={setSelectedHour}
              />

              {/* Duration */}
              <div>
                <label className="text-sm font-medium">Duration (hours)</label>
                <select
                  className="w-full mt-1 border rounded-lg px-3 py-2"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                >
                  {[1, 2, 3, 4].map((h) => (
                    <option key={h} value={h}>
                      {h} hour{h > 1 && "s"}
                    </option>
                  ))}
                </select>
              </div>

              <Button
                className="w-full"
                disabled={selectedHour === null}
                onClick={handleConfirm}
              >
                Confirm Booking
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
