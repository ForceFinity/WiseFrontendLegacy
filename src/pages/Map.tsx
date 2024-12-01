import Mapcomponent from '@/components/ui/mapcomponent.tsx';
import PopupBusStop from '@/components/ui/popupBusStop.tsx';
import SearchBar from "@/components/ui/SearchBar.tsx";
import Sidebar from "@/components/ui/sidebar.tsx";
import PopupRadius from '@/components/ui/popupRadius';
import { useEffect, useState } from "react";
import PopupMapType from "@/components/ui/popupMapType";

export type coord = {
    lat: number | null;
    lon: number | null;
};

function App() {
    const [isAlarmOn, setIsAlarmOn] = useState(true);

    const [location, setLocation] = useState<coord>({ lat: null, lon: null });
    const [error, setError] = useState<null | string>(null);

    const [markedLocation, setMarkedLocation] = useState<coord>({ lat: 42.500, lon: 27.47 });

    const [value, setValue] = useState('');

    const [ui, setUi] = useState<number>(0);

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
    type data = {
        user_coords: coord,
        destination_coords: coord,
        range: number
    }

    const handleWakeuper = () => {
        const alarmsString = localStorage.getItem('Alarms');
    
        console.log("Adding new alarm");
    
        const alarm = {
            user_coords: location,
            destination_coords: markedLocation,
            range: parseInt(value)
        };
    
        let alarms: data[] = [];
        if (alarmsString) {
            try {
                console.log("Parsing alarms from localStorage");
    
                alarms = JSON.parse(alarmsString) as data[];
            } catch (error) {
                console.error("Error parsing alarms from localStorage", error);
            }
        }
        alarms.push(alarm);
        localStorage.setItem('Alarms', JSON.stringify(alarms));
        setUi(0);
    };
    

    useEffect(() => {
        requestLocation();
    }, []);


    return (
        <div className={"flex flex-col items-center h-screen"}>
            <SearchBar />
            <Sidebar ui={ui} setUi={setUi}/>
            <Mapcomponent location={location} markedLocation={markedLocation} setMarkedLocation={setMarkedLocation} />

            { ui == 3 &&
                <PopupRadius value={value} setValue={setValue} handleWakeuper={handleWakeuper}  setUi={setUi} />
            }
            
            {/* {isAlarmOn && <div className="h-full w-full z-20 backdrop-blur" />}
            {isAlarmOn && <PopupBusStop setIsOpen={setIsAlarmOn} />} */}
        </div>
    );
}

export default App;
