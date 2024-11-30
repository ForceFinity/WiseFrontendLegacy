// components/Map.tsx
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter, CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/ScrollArea.tsx";


const popupTime = () => {
  return (
    <div className='flex justify-center'>
      <Card className='bottom-16 fixed h-48 w-9/12 z-20'>
        <ScrollArea className="h-full w-full">
          <div className="flex flex-row">
            <CardHeader>
              <b className="text-xl">6</b>
              <CardDescription>Supporting line text</CardDescription>
            </CardHeader>
            <div className="flex justify-center items-center">
              <CardDescription>Time left</CardDescription>
            </div>
          </div>
          <hr/>
          <div className="flex flex-row">
            <CardHeader>
              <b className="text-xl">15 4</b>
              <CardDescription>Supporting line text</CardDescription>
            </CardHeader>
            <div className="flex justify-center items-center">
              <CardDescription className="mr-8">Time left</CardDescription>
            </div>
          </div>
          <hr/>
          <div className="flex flex-row">
            <CardHeader>
              <b className="text-xl">Пеша</b>
              <CardDescription>Supporting line text</CardDescription>
            </CardHeader>
            <div className="flex justify-center items-center">
              <CardDescription>Time left</CardDescription>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default popupTime;