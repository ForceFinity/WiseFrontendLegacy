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


const Map = () => {
  return (
    <div className="fixed flex flex-col justify-center align-middle h-full max-w-sm w-full">
      <div className="h-2/4 w-0"/>
      <div className="flex flex-row justify-center align-middle z-30 w-full">
        <div className='grid place-content-center'>
            <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Map;