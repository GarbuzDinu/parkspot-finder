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
      className="relative min-h-screen flex items-center"
    >
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Parcheaza rapid si usor, fara stres.
            </h1>

            <p
              className="text-lg text-muted-foreground max-w-lg animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Reserve your parking space in advance. No more circling around
              looking for parking. Save time and park with confidence.
            </p>
            <div className="bg-white rounded-[28px] p-6 md:p-8 shadow-2xl max-w-3xl">
              {/* Location */}
              <div className="mb-6">
                <label className="block text-xl font-bold text-[#062B2B] mb-3">
                  Alege locația:
                </label>

                <div className="relative">
                  <select className="w-full h-14 px-5 rounded-xl border border-gray-300 text-lg text-gray-500 appearance-none outline-none">
                    <option>click pentru a vedea locațiile</option>

                    {parkingLocations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>

                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-lg">
                    ▼
                  </div>
                </div>
              </div>

              {/* Time Section */}
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
                {/* From */}
                <div>
                  <label className="block text-xl font-bold text-[#062B2B] mb-3">
                    De la:
                  </label>

                  <div className="relative">
                    <select className="w-full h-14 px-5 rounded-xl border border-gray-300 text-xl appearance-none outline-none">
                      <option>Astăzi, 19:00</option>
                    </select>

                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center pb-3 text-3xl text-gray-700">
                  →
                </div>

                {/* To */}
                <div>
                  <label className="block text-xl font-bold text-[#062B2B] mb-3">
                    Pana la:
                  </label>

                  <div className="relative">
                    <select className="w-full h-14 px-5 rounded-xl border border-gray-300 text-xl appearance-none outline-none">
                      <option>Astăzi, 19:00</option>
                    </select>

                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex justify-end mt-8">
                <button className="bg-lime-400 hover:bg-lime-500 transition-colors text-black font-bold text-xl px-8 py-4 rounded-full">
                  Verifica disponibilitatea
                </button>
              </div>
            </div>
            <div
              className="flex flex-wrap gap-8 pt-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
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
