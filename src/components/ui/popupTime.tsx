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


const Map = () => {
  return (
    <div className='flex justify-center'>
      <Card className='bottom-16 fixed h-64 w-9/12 z-20'>
        <ScrollArea className="h-full w-full">
          <div className="flex flex-row">
            <CardHeader>
              <CardTitle>6</CardTitle>
              <CardDescription>Supporting line text</CardDescription>
            </CardHeader>
            <div className="flex justify-center items-center">
              <CardDescription>Time left</CardDescription>
            </div>
          </div>
          <hr/>
          <div className="flex flex-row">
            <CardHeader>
              <CardTitle>15 4</CardTitle>
              <CardDescription>Supporting line text</CardDescription>
            </CardHeader>
            <div className="flex justify-center items-center">
              <CardDescription className="mr-8">Time left</CardDescription>
            </div>
          </div>
          <hr/>
          <div className="flex flex-row">
            <CardHeader>
              <CardTitle>Пеша</CardTitle>
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

export default Map;