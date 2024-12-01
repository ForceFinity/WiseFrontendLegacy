import axios from 'axios';

export interface Train {
    train: number;
    lat: number; lng: number;
}

interface TrainRaw extends Train {
    delay: number;
    category_id: number;
    station: string; next_station: number;
    LocNumber: string;
    WagCount: number;
    TimePlanned: string;
    date: string
}

const BASE_URL = "http://46.175.149.150:8003"

export const fetch_trains = async (): Promise<Train[]> => {
    const routes = await axios.get<TrainRaw[]>(BASE_URL + "/trains")

    return routes.data.map(route => ({
        train: route.train, lat: route.lat, lng: route.lng,
    }))
}
