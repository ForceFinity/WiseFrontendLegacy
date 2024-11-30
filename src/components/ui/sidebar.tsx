import { Input } from "@/components/ui/input"
import TrainSVG from "@/components/svg/TrainSVG";
import MapSVG from "@/components/svg/MapSVG";
import ClockSVG from "@/components/svg/ClockSVG";

export default function sidebar() {
    return (
        <div className="flex flex-col gap-4 justify-evenly items-end fixed z-10 top-28 right-4 ml-3 mr-3 w-11/12 h-14 rounded-full max-w-sm">
            <div>
                <button className="bg-white rounded-full p-2 w-8 h-8 shadow-black shadow-md">
                    <TrainSVG classes="1"/>
                </button>
            </div>
            <div>
                <button className="bg-white rounded-full p-1 w-8 h-8 shadow-black shadow-md">
                    <MapSVG classes="1"/>
                </button>
            </div>
            <div>
                <button className="bg-white rounded-full p-1 w-8 h-8 shadow-black shadow-md">
                    <ClockSVG classes="1"/>
                </button>
            </div>
        </div>
    )
}
