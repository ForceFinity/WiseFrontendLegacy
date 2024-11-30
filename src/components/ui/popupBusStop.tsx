// components/Map.tsx
'use client';


import { Card, CardDescription, CardHeader, } from "@/components/ui/card"


const popupBusStop = ({setIsOpen}: {setIsOpen: (isOpen: boolean) => unknown}) => {

    return (
        <div className="fixed flex flex-col justify-center align-middle top-1/2 max-w-sm w-full z-30">
            <div className="flex flex-row justify-center align-middle w-full">
                <div className='grid place-content-center '>
                    <Card className='text-center shadow-md'>
                        <div className="flex flex-row">
                            <CardHeader>
                                <p className="text-xl">Почти стигнахте!</p>
                                <CardDescription>Вашата спирка е след 200м</CardDescription>
                            </CardHeader>
                        </div>
                        <hr/>
                        <div className="flex flex-row">
                            <CardHeader
                                className="text-center w-full h-12 p-0 pt-2 cursor-pointer hover:sepia"
                                onClick={() => setIsOpen(false)}
                            >
                                <b className="text-xl text-red-600 text-center">Затвори</b>
                            </CardHeader>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default popupBusStop;