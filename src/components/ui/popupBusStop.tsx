// components/Map.tsx
'use client';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const popupBusStop = () => {
  return (
    <div className="fixed flex flex-col justify-center align-middle top-1/2 max-w-sm w-full">
      <div className="flex flex-row justify-center align-middle z-30 w-full">
        <div className='grid place-content-center'>
        <Card className='text-center'>
    <div className="flex flex-row">
      <CardHeader>
      <p className="text-xl">Почти стигнахте</p>
          <CardDescription>Вашата спирка е след 200м</CardDescription>
      </CardHeader>
      </div>
      <hr />
      <div className="flex flex-row">
      <CardHeader className="text-center w-full h-12 p-0 pt-2">
      <b className="text-xl text-red-600 text-center">Затвори</b>
      </CardHeader>
      </div>
    </Card>
        </div>
      </div>
    </div>
  );
};

export default popupBusStop;