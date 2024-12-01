'use client';

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useRef, useEffect } from 'react';

const Map = () => {
    const mapRef = useRef<L.Map | null>(null);
    const [position, setPosition] = useState<[number, number]>([42.500, 27.47]);
    const [isMarkerVisible, setIsMarkerVisible] = useState(false);

    const updatePosition = () => {
        if (mapRef.current) {
            const center = mapRef.current.getCenter();
            setPosition([center.lat, center.lng]);
        }
    };

    const MapEventHandler = () => {
        useMapEvents({
            move: updatePosition,
            drag: updatePosition,
            zoom: updatePosition,
        });
        return null;
    };

    useEffect(() => {
        if (mapRef.current) {
            updatePosition();
        }
    }, []);
    type coord = {
        lat: number | null,
        lon: number | null
    }
    const [location, setLocation] = useState<coord>({ lat: null, lon: null });
    const [error, setError] = useState<null | string>(null);

    const requestLocation = () => {
        if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
            setLocation({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            });
                setError(null);
            },
            (err) => {
                setError(err.message);
            }
        );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };

    requestLocation()

    return (
        <MapContainer
            ref={(instance) => {
                if (instance) {
                    mapRef.current = instance; // Save map instance
                }
            }}
            zoomControl={false}
            center={position}
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
                    <Marker position={position}>
                        <Popup>
                            Current position: {position[0].toFixed(5)}, {position[1].toFixed(5)}
                        </Popup>
                    </Marker>
                    <MapEventHandler />
                </>
            )}
        </MapContainer>
    );
};

export default Map;
