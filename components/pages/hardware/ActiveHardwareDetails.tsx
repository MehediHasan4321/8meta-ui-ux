'use client'

import Button from '@/components/ui/Button';
import { hardware } from '@/types';
import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2';
import Features from './Features';
import Image from 'next/image';



interface ActiveHardwareDetailsProps {
    activeHardwareDetails?: hardware;
}

const ActiveHardwareDetails: React.FC<ActiveHardwareDetailsProps> = ({ activeHardwareDetails }) => {
    return (
        <div className='w-full flex gap-x-4'>
            <div className='w-full md:w-3/5 flex flex-col gap-y-12 lg:gap-y-[56px]'>
                <div className='flex flex-col items-center md:items-start gap-y-2'>
                    <h1 className='text-4xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-center truncate'>{activeHardwareDetails?.hardwareName}</h1>
                    <div className='lg:text-sm xl:text-lg text-secondary lg:tracking-[3px] xl:tracking-[5px]'>
                        <span>{activeHardwareDetails?.hardwareConfig.cores}</span>,
                        <span> {activeHardwareDetails?.hardwareConfig.threads}</span>,
                        <span> {activeHardwareDetails?.hardwareConfig.ghz}</span>
                    </div>
                </div>
                <div className=' flex justify-center md:hidden'>
                    <HardwareImage/>
                </div>

                <div className='flex flex-col items-center md:items-start gap-y-3'>
                    <Features text={activeHardwareDetails?.hardwareSerice} />
                    <Features text={activeHardwareDetails?.hardwareLine} />
                    <Features text={activeHardwareDetails?.hardwareGhz} />
                    <Features text={activeHardwareDetails?.hardwareCache} />
                </div>

                <div className='w-full flex flex-row justify-between items-center'>

                    <div className='flex gap-x-3 items-center text-primary text-lg cursor-pointer group'>
                        <h3 className='uppercase text-sm lg:text-lg font-semibold'>Full Space</h3>
                        <FaArrowUpRightFromSquare size={15} className='transition duration-100 group-hover:scale-110' />
                    </div>

                    <div className='flex gap-x-2 text-primary cursor-pointer items-center group'>
                        <h3 className='text-sm lg:text-lg font-semibold uppercase'>Compare</h3>
                        <HiOutlineArrowPathRoundedSquare size={20} className='transition duration-100 group-hover:scale-110' />
                    </div>

                    <div className='flex flex-row gap-x-3 items-center'>
                        <div className={activeHardwareDetails?.status === 'In Stock' ? 'w-2 h-2 rounded-full bg-primary' : 'w-2 h-2 rounded-full bg-[#999]'} />
                        {activeHardwareDetails?.status}
                    </div>
                </div>
                <div className='w-full flex flex-row justify-between items-center'>
                    <div className='flex items-end gap-x-2'>
                        <span className='text-secondary text-md'>From </span> <span className='text-3xl font-normal'> ${activeHardwareDetails?.price}</span> <span className='text-secondary text-md'> / mo</span>
                    </div>
                    <div>
                        <Button className='w-fit'> Configur Now </Button>
                    </div>
                </div>
            </div>
            <div className=' hidden md:flex w-2/5 min-h-[30vh] items-center'>
                <HardwareImage/>
            </div>
        </div>
    );
};

const HardwareImage = () => {
    return (
        <div className='relative size-60 lg:size-80 xl:size-80'>
            <Image src={'/images/processor.png'} fill alt={'image'} />
        </div>
    )
}

export default ActiveHardwareDetails;