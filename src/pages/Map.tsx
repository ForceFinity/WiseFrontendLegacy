import Mapcomponent from '@/components/ui/mapcomponent.tsx';
import PopupBusStop from '@/components/ui/popupBusStop.tsx';
import SearchBar from "@/components/ui/SearchBar.tsx";
import Sidebar from "@/components/ui/sidebar.tsx";
import PopupRadius from '@/components/ui/popupRadius';
import { useEffect, useState } from "react";
import PopupTime from "@/components/ui/popupTime.tsx";

export type coord = {
    lat: number | null;
    lon: number | null;
};

    function App() {
    const [isAlarmOn, setIsAlarmOn] = useState(true);
    
    const [location, setLocation] = useState<coord>({ lat: null, lon: null });
    const [error, setError] = useState<null | string>(null);

    const [markedLocation, setMarkedLocation] = useState<coord>({ lat: 42.500, lon: 27.47 });

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


    return (
        <div className={"flex flex-col items-center h-screen"}>
            <SearchBar/>
            <Sidebar/>
            <Mapcomponent location={location} markedLocation={markedLocation} setMarkedLocation={setMarkedLocation}/>

            {/* <PopupTime /> */}
            <PopupRadius/>

            {isAlarmOn && <div className="h-full w-full z-20 backdrop-blur"/>}
            {isAlarmOn && <PopupBusStop setIsOpen={setIsAlarmOn}/>}
        </div>
    );
}

export default App;
