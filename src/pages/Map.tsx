import Mapcomponent from '@/components/ui/mapcomponent.tsx';
import PopupBusStop from '@/components/ui/popupBusStop.tsx';
import SearchBar from "@/components/ui/SearchBar.tsx";
import Sidebar from "@/components/ui/sidebar.tsx";
import { useState } from "react";
import PopupTime from "@/components/ui/popupTime.tsx";

function App() {
    const [isAlarmOn, setIsAlarmOn] = useState(true);

    return (
        <div className={"flex flex-col items-center h-screen"}>
            <SearchBar/>
            <Sidebar/>
            <Mapcomponent/>
            <PopupTime />
            {isAlarmOn && <div className="h-full w-full z-20 backdrop-blur" >a</div>}
            {isAlarmOn && <PopupBusStop setIsOpen={setIsAlarmOn} />}
        </div>
    );
}

export default App;
