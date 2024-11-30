// components/Map.tsx
'use client';
import PopupMark from '@/components/svg/MarkSVG.tsx'


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter, CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/ScrollArea.tsx";


const popupMark = () => {
  return (
    <div className='flex justify-center'>
      <Card className='bottom-16 fixed h-40 w-10/12 z-20 shadow-md'>
          <div className="flex flex-row text-center">
            <CardHeader className='w-full'>
              <p className="text-xl">Посочете желаната <br />дестинация</p>
            </CardHeader>
          </div>
          <center>
            <PopupMark classes="1"/>
          </center>
      </Card>
    </div>
  );
};

export default popupMark;