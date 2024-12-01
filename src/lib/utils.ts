import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function decodePolyline(encoded: string): number[][] {
  const coordinates: number[][] = [];
  let index = 0;
  const length = encoded.length;
  let lat = 0;
  let lng = 0;

  while (index < length) {
    let shift = 0;
    let result = 0;
    let byte;

    // Decode latitude
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    const deltaLat = (result & 1) ? ~(result >> 1) : (result >> 1);
    lat += deltaLat;

    // Decode longitude
    shift = 0;
    result = 0;
    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);
    const deltaLng = (result & 1) ? ~(result >> 1) : (result >> 1);
    lng += deltaLng;

    // Convert from E5 to decimal degrees
    coordinates.push([lat / 1e5, lng / 1e5]);
  }

  return coordinates;
}

export function flatDistance(
    lat1: number, lng1: number,
    lat2: number, lng2: number
): number {
  const toRadians = (degrees: number): number => degrees * (Math.PI / 180);

  // Approximate conversion factors
  const R = 6371; // Radius of the Earth in kilometers
  const latFactor = R * Math.PI / 180; // Kilometers per degree of latitude
  const lngFactor = latFactor * Math.cos(toRadians(lat1)); // Adjust for latitude

  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;

  // Distance using Pythagoras
  const distance = Math.sqrt((dLat * latFactor) ** 2 + (dLng * lngFactor) ** 2);

  return distance; // Distance in kilometers
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
