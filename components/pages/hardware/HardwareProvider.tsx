'use client'

import SectionDivider from '@/components/share/SectionDivider';
import { hardwareProviders } from '@/constants';
import Image from 'next/image';
import React from 'react';

const HardwareProvider = () => {
    return (
        <SectionDivider>
            <div className=' p-16  '>
                <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-16'>
                    <h5 className='text-lg flex-none '>Hardware Provider :</h5>
                    <div className='flex-1 flex justify-around items-center gap-4 flex-wrap'>
                        {
                            hardwareProviders.map(item => (
                                <div key={item.name} className=' min-w-32 min-h-8 relative '>
                                       <Image src={item.url} fill alt={item.name}/> 
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </SectionDivider>
    );
};

export default HardwareProvider;