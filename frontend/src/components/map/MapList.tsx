const ParkingList = ({ locations, onLocationClick }) => {
  return (
    <div className="absolute top-60 left-4 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg max-h-[90%] overflow-y-auto w-64">
      <h3 className="font-bold text-lg mb-2">Parking Locations</h3>
      <ul className="space-y-2">
        {locations.map((loc) => (
          <li key={loc.id}>
            <button
              className="text-left w-full hover:text-blue-600 transition-colors text-sm font-medium"
              onClick={() => onLocationClick(loc)}
            >
              {loc.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParkingList;
