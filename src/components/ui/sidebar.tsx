import SettingsSVG from "@/components/svg/Settings1SVG";
import ClockSVG from "@/components/svg/ClockSVG";

export default function sidebar({ui, setUi}: { ui: number, setUi: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <div
            className="flex flex-col gap-4 justify-evenly items-end fixed z-10 top-32 right-4 ml-3 mr-3 w-11/12 h-14 rounded-full max-w-sm">
            <div>
                <button className="bg-white rounded-full p-3 w-12 h-12 shadow-md"
                        onClick={() => ui == 1 ? setUi(0) : setUi(1)}>
                    <SettingsSVG classes="1"/>
                </button>
            </div>
            <div>
                <button className="bg-white rounded-full p-3 w-12 h-12 shadow-md"
                        onClick={() => ui == 2 ? setUi(0) : setUi(2)}>
                    <ClockSVG classes="1"/>
                </button>
            </div>
        </div>
    )
}
