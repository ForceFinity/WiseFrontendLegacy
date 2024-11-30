import Mapcomponent from '@/components/ui/mapcomponent';
import SearchBar from "@/components/ui/SearchBar.tsx";
import PopupTime from "@/components/ui/popupTime.tsx";



function App() {

  return (
    <div className="flex flex-col items-center h-screen">
      <SearchBar />
      <Mapcomponent/>
      <PopupTime />
    </div>
  );
}

export default App;
