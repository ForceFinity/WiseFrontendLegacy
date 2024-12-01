'use client';

import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useRef, useEffect } from 'react';

const Map = () => {
    const mapRef = useRef<L.Map | null>(null);
    const [position, setPosition] = useState<[number, number]>([42.500, 27.47]);
    const [isMarkerVisible, setIsMarkerVisible] = useState(true);

    // Function to update position based on map movement
    const updatePosition = () => {
        if (mapRef.current) {
            const center = mapRef.current.getCenter();
            const newPosition: [number, number] = [center.lat, center.lng];

            // Only update position if it has moved significantly (to avoid constant updates)
            if (newPosition[0] !== position[0] || newPosition[1] !== position[1]) {
                setPosition(newPosition); // Update position only if it has changed
            }
        }
    };

    // Event handler to capture map events
    const MapEventHandler = () => {
        useMapEvents({
            moveend: updatePosition, // Trigger after map movement ends
        });
        return null;
    };

    useEffect(() => {
        if (mapRef.current) {
            updatePosition(); // Set initial position after the map is loaded
        }
    }, []);

    type coord = {
        lat: number | null;
        lon: number | null;
    };
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

    useEffect(() => {
        requestLocation();
    }, []);

    // UseEffect for smooth map centering only when position changes
    useEffect(() => {
        if (mapRef.current && position) {
            // Only update map view if the position changed (avoid unnecessary pan)
            const map = mapRef.current;
            const currentCenter = map.getCenter();

            // Check if the position has actually changed before updating the map
            if (currentCenter.lat !== position[0] || currentCenter.lng !== position[1]) {
                map.setView(position, 13, { animate: true }); // Animate the transition
            }
        }
    }, [position]); // This effect runs when the position changes

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
