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

function popupRadius() {
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: any; }; }) => {
    // Get the value of the input
    const inputValue = event.target.value;

    // Ensure that the input is a valid integer (remove non-numeric characters)
    if (inputValue === '' || /^[0-9]+$/.test(inputValue)) {
      setValue(inputValue); // Update the value only if it's a valid integer
    }
  };

  return (
    <div className='flex justify-center'>
      <Card className='bottom-16 fixed h-40 w-10/12 z-20'>
          <div className="flex flex-row text-center">
            <CardHeader className='w-full'>
              <p className="text-xl">Задайте разстояние на<br />което да Ви събудим</p>
            </CardHeader>
          </div>
          <center>
          <Input id="integer-input" type="text" value={value} onChange={handleChange} placeholder="200m" className="outline outline-2 outline-gray-300 w-9/12 border-0 rounded-full" />
          </center>
      </Card>
    </div>
  );
}

export default popupRadius;
