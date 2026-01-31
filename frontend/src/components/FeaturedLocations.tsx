import { MapPin, Star, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: 1,
    name: "City Center Garage",
    address: "123 Main Street, Downtown",
    price: 3.5,
    rating: 4.8,
    spots: 45,
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop",
    features: ["24/7 Access", "EV Charging", "Security"],
  },
  {
    id: 2,
    name: "Airport Long Stay",
    address: "Airport Road, Terminal 1",
    price: 8.0,
    rating: 4.9,
    spots: 120,
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=400&h=300&fit=crop",
    features: ["Shuttle Service", "Covered", "24/7 Security"],
  },
  {
    id: 3,
    name: "Shopping Mall Parking",
    address: "456 Commerce Ave",
    price: 2.0,
    rating: 4.6,
    spots: 200,
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400&h=300&fit=crop",
    features: ["Free 2hrs", "EV Charging", "Indoor"],
  },
  {
    id: 4,
    name: "Stadium Parking",
    address: "Sports Complex Drive",
    price: 5.0,
    rating: 4.7,
    spots: 500,
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=300&fit=crop",
    features: ["Event Pricing", "Pre-book", "Large Vehicles"],
  },
];

const FeaturedLocations = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Parking Locations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular parking spots across the city. Book in advance and never worry about finding parking again.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={location.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm font-medium">{location.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {location.name}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{location.address}</span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {location.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Car className="w-4 h-4" />
                      <span>{location.spots} spots</span>
                    </div>
                    <div className="font-bold text-primary">
                      ${location.price.toFixed(2)}<span className="text-sm font-normal text-muted-foreground">/hr</span>
                    </div>
                  </div>
                  <Button size="sm">Book</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLocations;
