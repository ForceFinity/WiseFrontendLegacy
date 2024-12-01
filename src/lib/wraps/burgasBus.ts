import axios from 'axios';
import { decodePolyline } from "@/lib/utils.ts";

interface Pattern {
    geometry: string
}

interface RouteBase {
    id: number;
    shortName: string;
    longName: string;
    color: string; // hex without "#"
    textColor: string;  // hex without "#"
}

interface RouteRaw extends RouteBase {
    patterns: Pattern[]
}

export interface Route extends RouteBase {
    polyline: number[][]
}

const BASE_URL = "https://www.telelink.city/api/v1/949021bc-c2c0-43ad-a146-20e19bbc3649/transport"

export const fetch_buses = async (): Promise<Route[]> => {
    const routes = await axios.get<RouteRaw[]>(BASE_URL + "/planner/routes")
    const results: Route[] = []

    routes.data.forEach((route) => {
        const { patterns, ...base } = route;

        results.push({ ...base, polyline: decodePolyline(patterns[0].geometry) })
    })

    return results
}
