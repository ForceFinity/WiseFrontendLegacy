import Mapcomponent from '@/components/ui/mapcomponent.tsx';
import PopupBusStop from '@/components/ui/popupBusStop.tsx';
import SearchBar from "@/components/ui/SearchBar.tsx";
import Sidebar from "@/components/ui/sidebar.tsx";
import { useState } from "react";

function App() {
    const [isAlarmOn, setIsAlarmOn] = useState(true);

    return (
        <div className="flex flex-col items-center h-screen">
            <SearchBar/>
            <Sidebar/>
            <Mapcomponent/>
            {isAlarmOn && <PopupBusStop setIsOpen={setIsAlarmOn} />}
        </div>
    );
}

export default App;
