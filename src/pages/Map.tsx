import MapComponent from '@/components/ui/MapComponent.tsx';
import PopupBusStop from '@/components/ui/popupBusStop.tsx';
import SearchBar from "@/components/ui/SearchBar.tsx";
import Sidebar from "@/components/ui/sidebar.tsx";
import PopupRadius from '@/components/ui/popupRadius';
import { useState } from "react";
import { BusMarkers } from "@/components/ui/BusMarkers.tsx";

function Map() {
    const [isAlarmOn, setIsAlarmOn] = useState(false);

    return (
        <div className={"flex flex-col items-center h-screen"}>
            <SearchBar/>
            <Sidebar/>
            <MapComponent/>

            {/* <PopupTime /> */}
            <PopupRadius/>

            {isAlarmOn && <div className="h-full w-full z-20 backdrop-blur"/>}
            {isAlarmOn && <PopupBusStop setIsOpen={setIsAlarmOn}/>}
        </div>
    );
}

export default Map;
