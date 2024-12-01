'use client';

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useRef, useEffect } from 'react';
import { coord } from '@/pages/Map';

const Map = ({location, markedLocation, setMarkedLocation}:{
        location: coord
        markedLocation: coord,
        setMarkedLocation: React.Dispatch<React.SetStateAction<coord>>
    }) => {
    const mapRef = useRef<L.Map | null>(null);
    const [isMarkerVisible, setIsMarkerVisible] = useState(true);

    const updatePosition = () => {
        if (mapRef.current) {
            const center = mapRef.current.getCenter();
            const newPosition: coord = {
                lat: center.lat,
                lon: center.lng
            };

            if (newPosition.lat !== markedLocation.lat || newPosition.lon !== markedLocation.lon) {
                setMarkedLocation(newPosition);
            }
        }
    };

    const MapEventHandler = () => {
        useMapEvents({
            moveend: updatePosition,
        });
        return null;
    };

    useEffect(() => {
        if (mapRef.current) {
            updatePosition();
        }
    }, []);

    useEffect(() => {
        if (mapRef.current && markedLocation) {
            const map = mapRef.current;
            const currentCenter = map.getCenter();

            if (currentCenter.lat !== markedLocation.lat || currentCenter.lng !== markedLocation.lon) {
                map.setView([!!markedLocation.lat ? markedLocation.lat : 0,
                             !!markedLocation.lon ? markedLocation.lon : 0],
                              13,
                            { animate: true });
            }
        }
    }, [markedLocation]);

    return (
        <MapContainer
            ref={(instance) => {
                if (instance) {
                    mapRef.current = instance; 
                }
            }}
            zoomControl={false}
            center={[!!markedLocation.lat ? markedLocation.lat : 0,
                     !!markedLocation.lon ? markedLocation.lon : 0]}
            zoom={13}
            className="fixed w-full h-full grow z-0"
        >
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                maxZoom={20}
                minZoom={0}
            />
            {isMarkerVisible && (
                <>
                    <Marker position={[!!markedLocation.lat ? markedLocation.lat : 0,
                     !!markedLocation.lon ? markedLocation.lon : 0]}>
                        <Popup>
                            Current position: {!!markedLocation.lat ? markedLocation.lat : 0}, {!!markedLocation.lon ? markedLocation.lon : 0}
                        </Popup>
                    </Marker>
                    <MapEventHandler />
                </>
            )}

            {location.lat && location.lon && (
                <>
                    <Marker position={[location.lat, location.lon]}>
                        <Popup>
                            Current position: {location.lat.toFixed(5)}, {location.lon.toFixed(5)}
                        </Popup>
                    </Marker>
                </>
            )}
        </MapContainer>
    );
};

export default Map;
