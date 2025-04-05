import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import car from '../../assets/Car Top View.png';

function TotalBookings() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const predefinedLocations = [
    { name: 'Downtown Parking', slots: 30, city: 'New York' },
    { name: 'Mall Parking', slots: 45, city: 'New York' },
    { name: 'Airport Parking', slots: 60, city: 'Los Angeles' },
    { name: 'Beach Parking', slots: 25, city: 'Los Angeles' },
    { name: 'City Center', slots: 35, city: 'Chicago' },
  ];

  // Generate 7 days from current date
  const getNext7Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.toISOString().split('T')[0],
        display: `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()} - ${date.toLocaleString('default', { weekday: 'short' })}`,
      });
    }
    return days;
  };
  const dates = getNext7Days();

  useEffect(() => {
    axios.get('http://localhost:3000/totalbookings')
      .then(res => {
        const enrichedLocations = res.data.map(loc => ({
          ...loc,
          slots: predefinedLocations.find(p => p.name === loc.locationName).slots,
          city: predefinedLocations.find(p => p.name === loc.locationName).city,
        }));
        setLocations(enrichedLocations);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedLocation && selectedDate) {
      axios.get(`http://localhost:3000/totalbookings/${selectedLocation}`, {
        params: { date: selectedDate },
      })
        .then(res => setBookings(res.data))
        .catch(err => console.error(err));
    }
  }, [selectedLocation, selectedDate]);

  // Calculate summary data
  const getSummaryData = () => {
    if (!selectedLocation) return { available: 0, occupied: 0, total: 0 };
    const totalSlots = predefinedLocations.find(l => l.name === selectedLocation)?.slots || 0;
    const occupiedSlots = bookings.length;
    const availableSlots = totalSlots - occupiedSlots;
    const totalRevenue = occupiedSlots * 100; // Assuming ₹100 per slot
    return { available: availableSlots, occupied: occupiedSlots, total: totalSlots, revenue: totalRevenue };
  };
  const { available, occupied, total, revenue } = getSummaryData();

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center m-40">
      {/* Summary Cards */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mb-8">
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Available slots</div>
          <div className="text-2xl font-bold">{available}</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Occupied</div>
          <div className="text-2xl font-bold">{occupied}</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">{selectedLocation || 'Select Location'}</div>
          <div className="text-2xl font-bold">{total}</div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center shadow">
          <div className="text-gray-700 font-semibold">Total Revenue</div>
          <div className="text-2xl font-bold">₹ {revenue}</div>
        </div>
      </div> */}

      {/* Filter Controls */}
      <div className="flex gap-4 mb-6">
        <select
          value={selectedLocation || ''}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="p-2 bg-white rounded border-gray-300 focus:outline-none"
        >
          <option value="">Select Location</option>
          {locations.map(loc => (
            <option key={loc.locationName} value={loc.locationName}>
              {loc.locationName} ({loc.city})
            </option>
          ))}
        </select>
        <select
          value={selectedDate || ''}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 bg-white rounded border-gray-300 focus:outline-none"
        >
          <option value="">Select Date</option>
          {dates.map((d, i) => (
            <option key={i} value={d.date}>
              {d.display}
            </option>
          ))}
        </select>
        <select className="p-2 bg-white rounded border-gray-300 focus:outline-none" disabled>
          <option>Vehicle: All</option>
          <option>Vehicle: 4 wheeler</option>
          <option>Vehicle: 2 wheeler</option>
        </select>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 border border-gray-700 rounded"></div>
          <span className="text-gray-700">Available</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-gray-700 rounded"></div>
          <span className="text-gray-700">Occupied</span>
        </div>
      </div>

      {/* Parking Layout */}
      {selectedLocation && selectedDate && (
        <div className="bg-gray-300 rounded-lg p-6 w-full max-w-4xl shadow-lg">
          <div className="flex justify-between mb-2 text-gray-700 font-semibold">
            <span>ENTRY</span>
            <span>EXIT</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Array(3)
              .fill(0)
              .map((_, rowIndex) => {
                const totalSlots = predefinedLocations.find(l => l.name === selectedLocation).slots;
                const slotsPerRow = Math.ceil(totalSlots / 3);
                const start = rowIndex * slotsPerRow;
                const end = Math.min(start + slotsPerRow, totalSlots);
                return (
                  <div key={rowIndex} className="grid grid-cols-2 gap-2">
                    {Array.from({ length: end - start }, (_, i) => {
                      const slotIndex = start + i;
                      const isOccupied = bookings.some(b => b.slot === slotIndex);
                      return (
                        <div
                          key={slotIndex}
                          className={`w-20 h-10 flex items-center justify-center ${
                            isOccupied ? 'bg-gray-700' : 'border border-gray-700'
                          } rounded`}
                        >
                          <img src={car} alt="Car" className="w-16 h-10" />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
          <div className="flex justify-between mt-4 text-gray-700 font-semibold">
            <span>ENTRY</span>
            <span>EXIT</span>
          </div>
        </div>
      )}

      {/* <button onClick={() => navigate('/')} className="mt-6 p-2 bg-gray-500 text-white rounded">
        Back to Home
      </button> */}
    </div>
  );
}

export default TotalBookings;