import MainNav from '@/components/MainNav';
import Mapcomponent from '@/components/ui/mapcomponent.tsx';
import PopupPath from '@/components/ui/popupPath.tsx';
import PopupBuses from '@/components/ui/popupBuses.tsx';
import PopupBusStop from '@/components/ui/popupBusStop.tsx';
import PopupTime from '@/components/ui/popupTime.tsx';
import PopupMark from '@/components/ui/popupMark.tsx'
import PopupRadius from '@/components/ui/popupRadius'
import SearchBar from "@/components/ui/SearchBar.tsx";
import Sidebar from "@/components/ui/sidebar.tsx";

import Blur from '@/components/ui/blur.tsx'

function App() {

  return (
    <div className="flex flex-col items-center h-screen">
      <SearchBar />
      <Sidebar/>
      <Mapcomponent/>
      <PopupBusStop/>
    </div>
  );
}

export default App;
