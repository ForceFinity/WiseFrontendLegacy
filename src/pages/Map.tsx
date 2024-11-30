import MainNav from '@/components/MainNav';
import Mapcomponent from '@/components/ui/mapcomponent';
import PopupTime from '@/components/ui/popupTime';
import PopupPath from '@/components/ui/popupPath';
import PopupBuses from '@/components/ui/popupBuses';
import PopupBusStop from '@/components/ui/popupBusStop';

function App() {

  return (
    <div className="flex flex-col h-screen">
      <MainNav/>
      <Mapcomponent/>
      <PopupBusStop/>
    </div>
  );
}

export default App;
