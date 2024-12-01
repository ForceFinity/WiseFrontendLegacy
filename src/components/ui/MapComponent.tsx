/* eslint-disable no-extra-boolean-cast */
'use client';

import { Circle, LayersControl, MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { coord } from '@/pages/Map';
import { BusLayer } from "@/components/ui/BusLayer.tsx";
import { TrainLayer } from "@/components/ui/TrainLayer.tsx";

export const MapComponent = ({location, markedLocation, setMarkedLocation}: {
    location: coord
    markedLocation: coord,
    setMarkedLocation: React.Dispatch<React.SetStateAction<coord>>
}) => {
    const mapRef = useRef<L.Map | null>(null);
    const [isMarkerVisible,] = useState(true);
    const [alarms, setAlarms] = useState<data[]>();

    type data = {
        user_coords: coord,
        destination_coords: coord,
        range: number
    }

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

            const alarmsString = localStorage.getItem('Alarms');

            let alarms: data[] = [];
            if (alarmsString) {
                try {
                    console.log("Parsing alarms from localStorage");

                    alarms = JSON.parse(alarmsString) as data[];
                    setAlarms(alarms);

                } catch (error) {
                    console.error("Error parsing alarms from localStorage", error);
                }
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
                    {animate: true});
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

            <LayersControl position="bottomright">
                <BusLayer />
                <TrainLayer />
            </LayersControl>

            {isMarkerVisible && (
                <>
                    <Marker position={[!!markedLocation.lat ? markedLocation.lat : 0,
                        !!markedLocation.lon ? markedLocation.lon : 0]}>
                        <Popup>
                            Current
                            position: {!!markedLocation.lat ? markedLocation.lat : 0}, {!!markedLocation.lon ? markedLocation.lon : 0}
                        </Popup>
                    </Marker>
                    <MapEventHandler/>
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

            {alarms?.map((e) => (
                <Circle center={[
                    !!e.destination_coords.lat ? e.destination_coords.lat : 0,
                    !!e.destination_coords.lon ? e.destination_coords.lon : 0]} pathOptions={{fillColor: 'blue'}}
                        radius={e.range}/>
            ))}

        </MapContainer>
    );
};
