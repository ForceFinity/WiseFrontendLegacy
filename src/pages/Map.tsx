import MainNav from '@/components/MainNav';
import Mapcomponent from '@/components/ui/mapcomponent';
import PopupPath from '@/components/ui/popupPath';
import SearchBar from "@/components/ui/SearchBar.tsx";


function App() {

  return (
    <div className="flex flex-col items-center h-screen">
      <SearchBar />
      <Mapcomponent/>
      <PopupPath/>
    </div>
  );
}

export default App;
