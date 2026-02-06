import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import ParkingList from "./MapList";

type Location = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  marker?: maplibregl.Marker; // optional marker
};


const locations: Location[] = [
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

export default function MapView() {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapInstance = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [28.8326, 47.0246],
      zoom: 13.5,
      pitch: 0,
    });

    // Add markers and store references in locations
    locations.forEach((location) => {
      const marker = new maplibregl.Marker({ color: "#2563eb" })
        .setLngLat([location.lng, location.lat])
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setText(location.name)
        )
        .addTo(mapInstance);

      location.marker = marker;
    });

    setMap(mapInstance);

    return () => mapInstance.remove();
  }, []);

  const handleLocationClick = (location) => {
    if (!map) return;
    map.flyTo({ center: [location.lng, location.lat], zoom: 15 });
    location.marker.togglePopup();
  };

  return (
    <div className="relative w-full h-[900px]">
      <div ref={mapContainer} className="w-full h-full" />

      {/* Side list component */}
      <ParkingList locations={locations} onLocationClick={handleLocationClick} />
    </div>
  );
}
