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


const blur = () => {
  return (
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex w-full h-full z-20"/>
  );
};

export default blur;