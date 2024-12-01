// components/Map.tsx
'use client';
import { Input } from "@/components/ui/input"
import React, { useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter, CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/ScrollArea.tsx";
import { Button } from "./button";

function popupRadius({value, setValue, handleWakeuper, setUi}:
  { value: string, 
    setValue: React.Dispatch<React.SetStateAction<string>>,
    handleWakeuper: () => void,
    setUi: React.Dispatch<React.SetStateAction<number>>
  }) {

  const handleChange = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;
    if (inputValue === '' || /^[0-9]+$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div className='flex justify-center'>
      <Card className='bottom-16 fixed h-48 w-10/12 z-20 shadow-md'>
          <div className="flex flex-row text-center">
            <CardHeader className='w-full'>
              <p className="text-xl">Задайте разстояние на<br />което да Ви събудим</p>
            </CardHeader>
          </div>
          <center className="flex flex-col gap-2 px-20">
            <Input 
              id="integer-input" 
              type="text" value={value} 
              onChange={handleChange} 
              placeholder="200m" 
              className="outline outline-2 outline-gray-300 border-0 rounded-full w-full"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  e.currentTarget?.form?.dispatchEvent(new Event("submit", { cancelable: true }))
                }
              }}
            />
            <Button type="submit" onClick={handleWakeuper}>Submit</Button>
          </center>
      </Card>
    </div>
  );
}

export default popupRadius;
