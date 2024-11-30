import MainNav from '@/components/MainNav';
import Mapcomponent from '@/components/ui/mapcomponent';
import PopupPath from '@/components/ui/popupPath';



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
