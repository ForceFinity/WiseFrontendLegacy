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
                            <img src="https://cdn.discordapp.com/attachments/1260262354105536564/1312696342304391219/image.png?ex=674d6f3c&is=674c1dbc&hm=51b4d98ac9bdc0c8adf7fec6f779980822ca1347b9c858383f6b28a34a8cb719&" className='h-16 w-16' alt="" />
                            <p>По дефолт</p>
                        </div>
                        <div className='flex flex-col text-center'>
                            <img src="https://cdn.discordapp.com/attachments/1260262354105536564/1312696465532915763/image.png?ex=674d6f5a&is=674c1dda&hm=77b334200aeabe852a51c9168985046d8563e3131e0c990b47e25a546e3e6b16&" className='h-16 w-16' alt="" />
                            <p>Релеф</p>
                        </div>
                        <div className='flex flex-col text-center'>
                            <img src="https://cdn.discordapp.com/attachments/1260262354105536564/1312696495023067176/image.png?ex=674d6f61&is=674c1de1&hm=f9c5126df8792fb754bcd26dda39a05627ff8fcda7ca1f3ea0fc7f9c395cc721&" className='h-16 w-16' alt="" />
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