import { MapPin, Star, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { customInstance } from "@/config/axiosConfig";

type ParkSlot = {
  id: number;
  name: string;
  address: string;
  freeSlots: number;
  busySlots: number;
  rating: number;
};

const FeaturedLocations = () => {
  const [locations, setLocations] = useState<ParkSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     try {
  //       const response = await customInstance<ParkSlot[]>({
  //         url: "/api/park-slots",
  //         method: "GET",
  //       });
  //       setLocations(response);
  //       setLoading(false);
  //     } catch (err: any) {
  //       console.error(err);
  //       setError(err.message || "Failed to fetch parking spots");
  //       setLoading(false);
  //     }
  //   };

  //   fetchLocations();
  // }, []);

  if (loading) return <div className="text-center py-20">Loading parking spots...</div>;
  if (error) return <div className="text-center py-20">Failed to load parking spots: {error}</div>;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Parking Locations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover available parking spots near you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div key={location.id} className="bg-card rounded-2xl overflow-hidden shadow-soft">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400"
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-card/90 px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm">{location.rating.toFixed(1)}</span>
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
                    <span>{location.freeSlots} free spots</span>
                  </div>
                  <Button size="sm">Book</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocations;
