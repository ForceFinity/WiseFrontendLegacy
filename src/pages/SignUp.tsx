import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      alert('Login successful');
    } else {
      setError('Invalid credentials');
    }
  };
  const [date, setDate] = React.useState<Date>()
  return (

    <div className='flex h-screen items-center justify-center flex-col align-middle gap-12'>

      <div className="text-center flex flex-col gap-2">
        <h1 className='text-black text-6xl font-bold'>
          New?
        </h1>
        <h1 className='text-black text-6xl font-bold'>
          Sign Up!
        </h1>
      </div>

      <div className='flex w-full justify-center items-center flex-col gap-2'>

        <div className="grid w-3/4 items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>

        <div className="grid w-3/4 items-center gap-1.5">
          <Label htmlFor="email">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <div className="grid w-3/4 gap-1.5">
              <Label htmlFor="email">Birth Date</Label>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button variant="outline" className='bg-gray-950 text-white hover:bg-gray-700 hover:text-white mt-16 w-28 h-10'>Continue</Button>
      </div>

    </div>
  );
};

export default Signup;

