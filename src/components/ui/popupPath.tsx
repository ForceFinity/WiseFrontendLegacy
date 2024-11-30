// components/Map.tsx
'use client';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const popupPath = () => {
  return (
    <div className="fixed flex flex-col justify-center align-middle top-2/3 max-w-md w-full">
      <div className="flex flex-row justify-center align-middle z-30 w-full">
        <div className='grid place-content-center'>
            <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default popupPath;