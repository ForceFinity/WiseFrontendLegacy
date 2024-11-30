import Mapcomponent from '@/components/ui/mapcomponent.tsx';
import PopupBusStop from '@/components/ui/popupBusStop.tsx';
import SearchBar from "@/components/ui/SearchBar.tsx";
import Sidebar from "@/components/ui/sidebar.tsx";

function App() {

    return (
        <div className="flex flex-col items-center h-screen">
            <SearchBar/>
            <Sidebar/>
            <Mapcomponent/>
            <PopupBusStop/>
        </div>
    );
}

export default App;
