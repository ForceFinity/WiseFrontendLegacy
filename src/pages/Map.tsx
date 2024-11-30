import MainNav from '@/components/MainNav';
import Mapcomponent from '@/components/ui/mapcomponent';
import PopupPath from '@/components/ui/popupPath';
import PopupBusStop from '@/components/ui/popupBusStop';
import PopupBuses from '@/components/ui/popupBuses';
import SearchBar from '@/components/ui/SearchBar';



function App() {

  return (
    <div className="flex flex-col items-center h-screen">
      <SearchBar />
      <Mapcomponent/>
      <PopupBusStop/>
    </div>
  );
}

export default App;
