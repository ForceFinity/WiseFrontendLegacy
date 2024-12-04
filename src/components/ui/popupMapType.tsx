// components/Map.tsx
'use client';
import BusSVG from '@/components/svg/BusSVG.tsx'
import TramSVG from '@/components/svg/TramSVG.tsx'
import Train1SVG from '@/components/svg/Train1SVG.tsx'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter, CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/ScrollArea.tsx";


const popupMapType = () => {
    return (
        <div className='flex justify-center'>
            <Card className='bottom-0 fixed h-auto w-full z-20 shadow-md bg-white pb-10'>
                <div className='flex flex-col justify-evenly'>
                    <div className="flex flex-row text-center">
                        <CardHeader className='w-full'>
                            <b className="text-xl text-start">Вид на картата</b>
                        </CardHeader>
                    </div>
                    <div className='flex flex-row justify-evenly w-full'>

                        <div className='flex flex-col text-center'>
                            <img src="https://imgur.com/ei0Do2J" className='h-16 w-16' alt="" />
                            <p>По дефолт</p>
                        </div>
                        <div className='flex flex-col text-center'>
                            <img src="https://imgur.com/woJLsCw" className='h-16 w-16' alt="" />
                            <p>Релеф</p>
                        </div>
                        <div className='flex flex-col text-center'>
                            <img src="https://imgur.com/bSr0xKK" className='h-16 w-16' alt="" />
                            <p>Сателит</p>
                        </div>

                    </div>
                    <div className='flex flex-col text-center'>
                        <hr />
                        <div className="flex flex-row text-center">
                            <CardHeader className='w-full'>
                                <b className="text-xl text-start">Параметри на картата</b>
                            </CardHeader>
                        </div>
                        <div className='flex flex-row justify-evenly'>

                            <div className='flex flex-col text-center'>
                                <div className='p-5'>
                                    <BusSVG classes='1'/>
                                </div>
                            </div>
                            <div>
                            <div className='p-5'>
                                    <TramSVG classes='1'/>
                                </div>
                            </div>
                            <div>
                            <div className='p-5'>
                                    <Train1SVG classes='1'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default popupMapType;