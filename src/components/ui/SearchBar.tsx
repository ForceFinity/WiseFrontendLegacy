import { Input } from "@/components/ui/input"
import SearchSVG from "@/components/svg/SearchSVG.tsx";

export default function SearchBar() {
    return (
        <div className="flex gap-1 justify-center items-center fixed z-10 top-10 ml-3 mr-3 w-11/12 h-14 bg-white rounded-full max-w-sm shadow-md">
            <SearchSVG />
            <Input type="search" placeholder="Търси дестинация" className="w-9/12 border-0" />
        </div>
    )
}
