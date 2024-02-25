'use client'

import Button from '@/components/ui/Button';
import { hardware } from '@/types';
import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { HiOutlineArrowPathRoundedSquare } from 'react-icons/hi2';
import Features from './Features';



interface ActiveHardwareDetailsProps{
    activeHardwareDetails? :hardware;
}

const ActiveHardwareDetails:React.FC<ActiveHardwareDetailsProps> = ({activeHardwareDetails}) => {
    return (
        <div className='w-full bg-blackAcent flex flex-col gap-y-[56px]'>
                    <div className='flex flex-col items-start gap-y-2'>
                        <h1 className='text-5xl font-semibold text-center'>{activeHardwareDetails?.hardwareName}</h1>
                        <div className='text-lg text-secondary tracking-[5px]'>
                            <span>{activeHardwareDetails?.hardwareConfig.cores}</span>,
                            <span> {activeHardwareDetails?.hardwareConfig.threads}</span>,
                            <span> {activeHardwareDetails?.hardwareConfig.ghz}</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-y-3'>
                        <Features text={activeHardwareDetails?.hardwareSerice}/>
                        <Features text={activeHardwareDetails?.hardwareLine}/>
                        <Features text={activeHardwareDetails?.hardwareGhz}/>
                        <Features text={activeHardwareDetails?.hardwareCache}/>
                    </div>

                    <div className='w-full flex flex-row justify-between items-center'>

                        <div className='flex gap-x-3 items-center text-primary text-lg cursor-pointer group'>
                            <h3 className='uppercase font-semibold'>Full Space</h3>
                            <FaArrowUpRightFromSquare size={15} className='transition duration-100 group-hover:scale-110' />
                        </div>

                        <div className='flex gap-x-2 text-primary cursor-pointer items-center group'>
                            <h3 className='text-lg font-semibold uppercase'>Compare</h3>
                            <HiOutlineArrowPathRoundedSquare size={20} className='transition duration-100 group-hover:scale-110' />
                        </div>

                        <div className='flex flex-row gap-x-3 items-center'>
                            <div className={activeHardwareDetails?.status === 'In Stock'?'w-2 h-2 rounded-full bg-primary':'w-2 h-2 rounded-full bg-[#999]'}/>
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
    );
};

export default ActiveHardwareDetails;