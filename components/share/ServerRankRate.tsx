'use client'
import Image from 'next/image';
import React from 'react';
import { IoMdStar } from 'react-icons/io';

const ServerRankRate = () => {
    return (
        <div className='flex flex-col gap-3 md:flex-row justify-around items-center px-2'>

            <p className='w-full md:w-1/2 text-[12px] lg:text-[15px] xl:text-lg text-center md:text-left font-semibold'>Ranked among the top server providers in the industry on:</p>

            <div className='flex flex-row gap-x-4  items-center'>
                <div className='flex flex-row gap-x-4 items-center'>
                    <div>
                        <Image src={'/images/sycan.png'} height={30} width={30} alt='btimap' />
                    </div>
                    <div className='border-[1px] border-borderColor py-2 px-3 rounded-xl flex flex-row gap-x-6 items-center'>
                        <p>4.7</p>
                        <IoMdStar fill='orange' />
                    </div>
                </div>
                <div className='flex flex-row items-center gap-x-4'>
                    <div className='flex items-center'>
                        <IoMdStar size={25} fill='white' />
                        <h1 className='text-[18px] text-white'>TrustPilot</h1>
                    </div>
                    <div className='border-[1px] border-borderColor py-2 px-3 rounded-xl flex flex-row gap-x-6 items-center'>
                        <p>4.9</p>
                        <IoMdStar fill='orange' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServerRankRate;