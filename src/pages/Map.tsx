import Mapcomponent from '@/components/ui/mapcomponent.tsx';
import PopupBusStop from '@/components/ui/popupBusStop.tsx';
import SearchBar from "@/components/ui/SearchBar.tsx";
import Sidebar from "@/components/ui/sidebar.tsx";
import { useState } from "react";
<<<<<<< HEAD
import PopupTime from "@/components/ui/popupTime.tsx";
=======
>>>>>>> 1744dec29b60ca47136dccbb76d95bff0b0a3aba

function App() {
    const [isAlarmOn, setIsAlarmOn] = useState(true);

    return (
        <div className={"flex flex-col items-center h-screen"}>
            <SearchBar/>
            <Sidebar/>
            <Mapcomponent/>
<<<<<<< HEAD
            <PopupTime />
            {isAlarmOn && <div className="h-full w-full z-20 backdrop-blur" >a</div>}
=======
>>>>>>> 1744dec29b60ca47136dccbb76d95bff0b0a3aba
            {isAlarmOn && <PopupBusStop setIsOpen={setIsAlarmOn} />}
        </div>
    );
}

export default App;
