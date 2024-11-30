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


const popupTime = () => {
  return (
    <div className='flex justify-center w-full'>
    <Card className='bottom-16 fixed z-20'>
    <div className="flex flex-row">
      <CardHeader>
      <b className="text-xl">6</b>
          <CardDescription>Supporting line text</CardDescription>
      </CardHeader>
      <div className="flex justify-center items-center">
        <CardDescription>Time left</CardDescription>
      </div>
      </div>
      <hr />
      <div className="flex flex-row">
      <CardHeader>
      <b className="text-xl">15 4</b>
          <CardDescription>Supporting line text</CardDescription>
      </CardHeader>
      <div className="flex justify-center items-center">
        <CardDescription className="mr-8">Time left</CardDescription>
      </div>
      </div>
      <hr />
      <div className="flex flex-row">
      <CardHeader>
      <b className="text-xl">Пеша</b>
          <CardDescription>Supporting line text</CardDescription>
      </CardHeader>
      <div className="flex justify-center items-center">
        <CardDescription>Time left</CardDescription>
      </div>
      </div>
    </Card>
    </div>
  );
};

export default popupTime;