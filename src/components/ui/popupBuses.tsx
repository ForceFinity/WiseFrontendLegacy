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


const popupBuses = () => {
  return (
    <div className='flex justify-center w-full'>
    <Card className='bottom-16 fixed z-20 shadow-md'>
    <div className="flex flex-row">
      <CardHeader>
      <b className="text-xl">6</b>
          <CardDescription>Supporting line text</CardDescription>
      </CardHeader>
      </div>
      <hr />
      <div className="flex flex-row">
      <CardHeader>
      <b className="text-xl">Б1</b>
          <CardDescription>Supporting line text</CardDescription>
      </CardHeader>
      </div>
      <hr />
      <div className="flex flex-row">
      <CardHeader>
          <b className="text-xl">15</b>
          <CardDescription>Supporting line text</CardDescription>
      </CardHeader>
      </div>
    </Card>
    </div>
  );
};

export default popupBuses;