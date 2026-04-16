import { useState } from "react";
import { MapPin, Star, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useNavigate } from "react-router-dom";
import { parkingLocations, ParkingLocation } from "@/data/parkingLocations";

const FeaturedLocations = () => {
  const [selectedParking, setSelectedParking] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const navigate = useNavigate();

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Parking Locations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover available parking spots near you.
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start" }} className="relative">
          <CarouselContent className="-ml-4">
            {parkingLocations.map((location: ParkingLocation) => (
              <CarouselItem
                key={location.id}
                className="pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        location.image ||
                        "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400"
                      }
                      alt={location.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Rating */}
                    <div className="absolute top-3 right-3 bg-card/90 px-2 py-1 rounded-lg flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm">
                        {location.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1">{location.name}</h3>

                    {/* Address */}
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{location.address}</span>
                    </div>

                    {/* Availability + Price */}
                    <div className="text-sm text-muted-foreground mb-3 space-y-1">
                      <p>🕒 {location.availability}</p>
                      <p>💰 {location.pricePerHour} RON / hour</p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Car className="w-4 h-4" />
                        <span>{location.freeSlots} free spots</span>
                      </div>

                      <Button
                        size="sm"
                        disabled={location.freeSlots === 0}
                        onClick={() => navigate(`/parking/${location.id}`)}
                      >
                        {location.freeSlots === 0 ? "Full" : "Book now"}
                      </Button>
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
