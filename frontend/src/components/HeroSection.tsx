import { useRef, useEffect } from "react";
import { Search, MapPin, Clock, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { parkingLocations } from "@/data/parkingLocations";

const locations = [
  { id: 1, name: "Parking – Stefan cel Mare Blvd", lat: 47.0246, lng: 28.8326 },
  { id: 2, name: "Parking – Cathedral Park", lat: 47.0259, lng: 28.8347 },
  { id: 3, name: "Parking – National Opera", lat: 47.0223, lng: 28.8381 },
  { id: 4, name: "Parking – Central Market", lat: 47.0186, lng: 28.8414 },
  { id: 5, name: "Parking – Valea Morilor", lat: 47.0207, lng: 28.8124 },
  { id: 6, name: "Parking – Mediacor", lat: 47.0332, lng: 28.8259 },
  { id: 7, name: "Parking – Riscani District", lat: 47.0436, lng: 28.8682 },
  { id: 8, name: "Parking – Botanica Park", lat: 47.0039, lng: 28.8574 },
  { id: 9, name: "Parking – Malina Mică", lat: 47.0108, lng: 28.8256 },
  { id: 10, name: "Parking – Telecentru", lat: 47.0016, lng: 28.8289 },
];
const HeroSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<
    typeof parkingLocations
  >([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);

    if (!value.trim()) {
      setFilteredLocations([]);
      setShowDropdown(false);
      return;
    }

    const results = parkingLocations.filter(
      (location) =>
        location.name.toLowerCase().includes(value.toLowerCase()) ||
        location.address.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredLocations(results);
    setShowDropdown(true);
  };
  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [28.8326, 47.0246],
      zoom: 13.5,
      pitch: 0,
    });
    locations.forEach((loc) => {
      new maplibregl.Marker({ color: "#2563eb" })
        .setLngLat([loc.lng, loc.lat])
        .setPopup(new maplibregl.Popup({ offset: 25 }).setText(loc.name))
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              Smart Parking Solution
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Find & Book
              <span className="text-gradient block">Parking Spots</span>
              In Seconds
            </h1>

            <p
              className="text-lg text-muted-foreground max-w-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Reserve your parking space in advance. No more circling around
              looking for parking. Save time and park with confidence.
            </p>
            <div className="relative w-full">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />

                <input
                  type="text"
                  placeholder="Enter location"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="bg-transparent w-full outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {showDropdown && filteredLocations.length > 0 && (
                <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                  {filteredLocations.map((location) => (
                    <div
                      key={location.id}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => {
                        navigate(`/parking/${location.id}`);
                        setShowDropdown(false);
                        setSearchTerm("");
                      }}
                    >
                      <div className="font-medium">{location.name}</div>
                      <div className="text-xs text-gray-500">
                        {location.address}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className="flex flex-wrap gap-8 pt-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { value: "500+", label: "Parking Locations" },
                { value: "50K+", label: "Happy Customers" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card bg-secondary aspect-square lg:aspect-[4/3]">
              <div ref={mapContainer} className="w-full h-full" />
              <Link to="/map" className="absolute top-4 right-4 z-10">
                <Button
                  size="icon"
                  className="p-2 rounded-full bg-white/90 hover:bg-white shadow-md"
                >
                  <Maximize className="w-5 h-5 text-primary" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
