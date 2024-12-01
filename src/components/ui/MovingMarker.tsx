import { useEffect, useRef, useState } from "react";
import { flatDistance } from "@/lib/utils.ts";
import { Marker } from "react-leaflet";
import { DivIcon, Icon } from "leaflet";

interface IMovingMarker {
    polyline: number[][],
    speed?: number,
    icon?: Icon | DivIcon;
}

export const MovingMarker = ({
    polyline,
    speed,  // speed in meters per second
    icon
}: IMovingMarker) => {
    const [currentPosition, setCurrentPosition] = useState(polyline[0]);
    const markerRef = useRef<L.Marker>(null);
    speed = speed ? speed : 5

    useEffect(() => {
        let step = 0;
        let requestId: number;

        const moveMarker = () => {
            if (step >= polyline.length - 1) {
                cancelAnimationFrame(requestId);
                return;
            }

            const start = polyline[step];
            const end = polyline[step + 1];

            if (start[0] == end[0] && start[1] == end[1]) {
                step++
                if (step < polyline.length - 1) {
                    moveMarker();
                }
                return;
            }

            const distance = flatDistance(start[0], start[1], end[0], end[1]) * 1000;
            const duration = distance / speed; // Duration in seconds
            const frameRate = 60; // Frames per second
            const totalFrames = duration * frameRate;

            let currentFrame = 0;
            const interpolate = () => {
                if (currentFrame > totalFrames) {
                    step++;
                    if (step < polyline.length - 1) {
                        moveMarker();
                    }
                    return;
                }

                const t = currentFrame / totalFrames;
                const lat = start[0] + t * (end[0] - start[0]);
                const lng = start[1] + t * (end[1] - start[1]);

                setCurrentPosition([lat, lng]);
                markerRef.current?.setLatLng([lat, lng]);

                currentFrame++;
                requestId = requestAnimationFrame(interpolate);
            };

            interpolate();
        };

        moveMarker();

        return () => cancelAnimationFrame(requestId);
    }, [polyline]);

    if(icon)
        return (
            <Marker icon={icon} position={currentPosition} ref={markerRef}/>
        );
    return (
        <Marker  position={currentPosition} ref={markerRef}/>
    );
};