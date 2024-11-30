// components/Map.tsx
'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer zoomControl={false} center={[42.500, 27.47]} zoom={13} className='fixed w-full h-full grow z-0'>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={20} minZoom={0}
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