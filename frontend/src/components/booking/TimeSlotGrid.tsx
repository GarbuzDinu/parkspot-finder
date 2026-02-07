type Slot = {
  hour: number;
  available: boolean;
};

type Props = {
  slots: Slot[];
  selectedHour: number | null;
  onSelect: (hour: number) => void;
};

const TimeSlotGrid = ({ slots, selectedHour, onSelect }: Props) => {
  return (
    <div>
      <h4 className="font-medium mb-2">Available time slots</h4>
      <div className="grid grid-cols-4 gap-2">
        {slots.map((slot) => (
          <button
            key={slot.hour}
            disabled={!slot.available}
            onClick={() => onSelect(slot.hour)}
            className={`
              py-2 rounded-lg text-sm font-medium
              ${
                !slot.available
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : selectedHour === slot.hour
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/70"
              }
            `}
          >
            {slot.hour}:00
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotGrid;
