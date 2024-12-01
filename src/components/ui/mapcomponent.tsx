// components/Map.tsx
'use client';

import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import { useEffect, useState } from "react";
import { BusMarkers } from "@/components/ui/BusMarkers.tsx";

const RecenterAutomatically = ({center}: { center: LatLng }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center);
    }, [map, center]);
    return null;
}

// @ts-ignore
const Map = () => {
    const [userLoc, setUserLoc] = useState<LatLng>(new LatLng(42.500, 27.47))


    function success(position: GeolocationPosition) {
        const {latitude, longitude} = position.coords

        setUserLoc(new LatLng(latitude, longitude));
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }
    }, []);

    return (
        userLoc != null ?
            <MapContainer zoomControl={false} center={userLoc} zoom={13} className='fixed w-full h-full grow z-0'>
                <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    maxZoom={20} minZoom={0}
                />
                <BusMarkers/>
                <Marker position={userLoc}/>
                <RecenterAutomatically center={userLoc}/>
                {/*<button onClick={startMoving}>Move</button>*/}
            </MapContainer> : <h1>Loading...</h1>
    );
};

export default Map;