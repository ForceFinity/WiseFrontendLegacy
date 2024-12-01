import { Label } from "@/components/ui/label.tsx";

export default function TrainDynamicSVG(
    {className, color, text, textColor}:{
        className?: string, color: string, text: string, textColor: string
    }
)
{
    return (
        <div style={{backgroundColor: `#${color}`}}
             className="flex flex-col items-center shadow rounded-md bg-white w-fit aspect-square p-1">
            <svg className={className} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 11H19M9 18L6 21M15 18L18 21M12 11V4M8 15H8.01M16 15H16.01M8.2 18H15.8C16.9201 18 17.4802 18 17.908 17.782C18.2843 17.5903 18.5903 17.2843 18.782 16.908C19 16.4802 19 15.9201 19 14.8V6.2C19 5.0799 19 4.51984 18.782 4.09202C18.5903 3.71569 18.2843 3.40973 17.908 3.21799C17.4802 3 16.9201 3 15.8 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.07989 5 6.2V14.8C5 15.9201 5 16.4802 5.21799 16.908C5.40973 17.2843 5.71569 17.5903 6.09202 17.782C6.51984 18 7.07989 18 8.2 18Z"
                    stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

                <Label style={{color: `#${textColor}`}}>{text}</Label>
        </div>
)
}