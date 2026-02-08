import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import ParkingList from "./MapList";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export interface ParkingLocation {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  totalSlots: number;
  freeSlots: number;
  rating: number;
}

type MapLocation = ParkingLocation & {
  marker?: maplibregl.Marker;
};

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<maplibregl.Map | null>(null);

  const { parkingLocations } = useSelector((state: RootState) => state.parkSlot);
  const locations = useRef<MapLocation[]>(parkingLocations);

  useEffect(() => {
    if (!mapContainer.current) return;

    const mapInstance = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
      center: [28.8326, 47.0246],
      zoom: 13.5,
    });

    locations.current.forEach((location) => {
      const marker = new maplibregl.Marker({ color: "#2563eb" })
        .setLngLat([location.lng, location.lat])
        .setPopup(new maplibregl.Popup().setText(location.name))
        .addTo(mapInstance);

      location.marker = marker;
    });

    setMap(mapInstance);
    return () => mapInstance.remove();
  }, [parkingLocations]);

  const handleLocationClick = (location: MapLocation) => {
    if (!map || !location.marker) return;
    map.flyTo({ center: [location.lng, location.lat], zoom: 15 });
    location.marker.togglePopup();
  };

  return (
    <div className="relative w-full h-[900px]">
      <div ref={mapContainer} className="w-full h-full" />
      <ParkingList
        locations={locations.current}
        onLocationClick={handleLocationClick}
      />
    </div>
  );
}
