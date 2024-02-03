import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";




const Hero = () => {

    const Clients =[
        {
            src:'/images/client/client-1.png'
        },
        {
            src:'/images/client/client-2.png'
        },
        {
            src:'/images/client/client-3.png'
        },
        {
            src:'/images/client/client-4.png'
        },
        
    ]


    return (
        <div className='w-full max-h-[90vh] bg-hero bg-no-repeat bg-right relative'>
            <div className=' container mx-auto w-full h-full md:flex justify-between gap-x-6'>
                <div className='md:w-1/2 h-full'>
                    <div className='w-full h-auto flex flex-col mt-24'>
                        <div className='text-xl md:text-4xl 2xl:text-6xl space-y-2 font-semibold text-white'>
                            <h1>Dedicated Servers</h1>
                            <h1>in <span className='text-primary'>14 Global Locations</span></h1>
                            <h1>with Local Routing</h1>

                        </div>
                        <div className='mt-8'>
                            <p className='text-secondary text-md'><span className='text-primary'>194</span> available servers with same‑day delivery <br/> and exceptional client service.</p>
                        </div>
                    </div>
                    <div className='mt-[192px]'>
                        <div>
                            <p className='text-primary text-sm'>Trusted by the world’s leading organizations</p>
                            <div className='flex flex-row gap-x-[50px] mt-[30px]'>
                                {
                                    Clients.map(client=><ServerClient key={client.src} src={client.src}/>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className='mt-[127px] flex gap-x-1 items-center cursor-pointer'>
                        <p className='text-lg text-primary'>Why 8Meta  </p>
                        <MdKeyboardArrowDown size={35} className='text-primary'/> 
                    </div>
                </div>
                <div className='md:w-1/2 h-full flex justify-end mt-12 mr-6 '>
                    <Image src={'/images/Bitmap.png'} width={686} height={690} alt='hero-image' />
                </div>
            </div>
        </div>
    );
};


interface ServerClientProps{
    src:string
}


const ServerClient:React.FC<ServerClientProps> = ({src})=>{
    return(
        <div className='relative min-h-[29px] min-w-[130px]'>
        <Image  className=' object-contain' fill src={src} alt='image ' />
    </div>
    )
}

export default Hero;