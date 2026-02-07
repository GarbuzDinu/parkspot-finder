import { MapPin, Star, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { parkingLocations } from "@/data/parkingLocations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import BookingModal from "./booking/BookingModal";

const FeaturedLocations = () => {
  const [selectedParking, setSelectedParking] = useState<{
    id: number;
    name: string;
  } | null>(null);
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Parking Locations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover available parking spots near you.
          </p>
        </div>

        <Carousel opts={{ align: "start" }} className="relative">
          <CarouselContent className="-ml-4">
            {parkingLocations.map((location) => (
              <CarouselItem
                key={location.id}
                className="pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400"
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-card/90 px-2 py-1 rounded-lg flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm">
                        {location.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1">{location.name}</h3>

                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{location.address}</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Car className="w-4 h-4" />
                        <span>
                          {location.freeSlots} / {location.totalSlots} free
                        </span>
                      </div>

                      <Button
                        size="sm"
                        disabled={location.freeSlots === 0}
                        onClick={() =>
                          setSelectedParking({
                            id: location.id,
                            name: location.name,
                          })
                        }
                      >
                        {location.freeSlots === 0 ? "Full" : "Book"}
                      </Button>
                      {selectedParking && (
                        <BookingModal
                          open={!!selectedParking}
                          onClose={() => setSelectedParking(null)}
                          parkingId={selectedParking.id}
                          parkingName={selectedParking.name}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedLocations;
