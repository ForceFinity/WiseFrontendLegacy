import { Label } from "@/components/ui/label.tsx";

export default function BusDynamicSVG(
    {className, color, text, textColor}:{
        className?: string, color: string, text: string, textColor: string
    }
)
{
    return (
        <div style={{backgroundColor: `#${color}`}}
             className="flex flex-col items-center rounded-md bg-white w-fit aspect-square p-1">
            <svg className={className} width="12px" height="12px" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 6V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.07989 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6M5 6C5 6 5 3 12 3C19 3 19 6 19 6M5 6H19M5 13H19M17 21V19M7 21V19M8 16H8.01M16 16H16.01"
                    stroke={`#${textColor}`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <Label style={{color: `#${textColor}`}}>{text}</Label>
        </div>
    )
}