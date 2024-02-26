'use client'
import Button from '@/components/ui/Button';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const DedicatedServer = () => {
    return (
        <div className='container mx-auto my-[137px]'>
            <div className='flex flex-col items-center justify-center gap-y-10'>
                <h1 className='text-2xl md:text-4xl lg:text-7xl font-semibold'><span className='text-primary'>2394</span> Dedicated Servers In Stock</h1>
                <div>
                <Button icon={MdOutlineKeyboardArrowRight} className='w-fit px-10'>Configur Server</Button>
                </div>
            </div>
        </div>
    );
};

export default DedicatedServer;