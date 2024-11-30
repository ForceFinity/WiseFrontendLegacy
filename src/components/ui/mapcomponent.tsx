// components/Map.tsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer center={[42.500, 27.47]} zoom={13} className='h-fit grow z-0'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[42.500, 27.47]}>
        <Popup>
          Your marker! <br /> Wow!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;