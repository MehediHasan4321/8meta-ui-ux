'use client'

import SectionImage from '@/app/(home)/components/SectionImage';
import SectionDivider from '@/components/SectionDivider';
import SectionHeading from '@/components/SectionHeading';
import SectionPara from '@/components/SectionPara';
import IconPointer from '@/components/share/IconPointer';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaServer } from 'react-icons/fa';

const DedicatedServer = () => {
    const router = useRouter()
    return (
        <SectionDivider className='w-full flex flex-col md:flex-row md:items-center justify-around '>
            <div className='w-full md:w-1/2 flex justify-end xl:justify-center items-center p-2 md:p-4 lg:px-6 relative order-2 md:order-1 my-20 md:my-0 '>
                <SectionImage src='/images/useCase/dedicatedServer.png' className='2xl:w-[610px] 2xl:h-[410px]' alt='dedicated Server'>


                    <div className='absolute top-14 lg:top-16 -left-8 lg:-left-20 xl-left-24 w-[100px]  border-t-[1px] border-borderColor'>
                        <div className='relative w-full'>
                            <div className='absolute -top-4 -left-5 lg:-top-6 xl:-top-7 '>
                                <IconPointer image='/images/icons/server.png'/>
                            </div>
                        </div>
                    </div>
                    <div className='absolute w-[120px] bottom-[35%] h-[60px] lg:h-[100px] -left-10 lg:-left-[55px] xl:-left-[80px]  border-t-[1px] border-l-[1px] border-borderColor rounded-2xl'>
                        <div className='relative w-full h-full '>
                            <div className='absolute -left-4 top-8 lg:-left-6 xl:-left-7 lg:top-16'>
                            <IconPointer icon={FaServer}/>
                            </div>
                        </div>
                    </div>
                    <div className='absolute -bottom-5 -left-14 lg:-bottom-10 lg:-left-[70px] xl:-left-24 w-[120px]  lg:w-[135px] xl:w-[180px] h-[80px] lg:h-[100px] border-b-[1px] border-l-[1px] border-r-[1px] border-borderColor rounded-2xl'>
                        <div className='relative w-full'>
                            <div className='absolute -left-4 lg:-left-6 xl:-left-7 -top-5'>
                                <IconPointer image='/images/icons/Connect.png'/>
                            </div>
                        </div>
                    </div>
                </SectionImage>

            </div>
            <div className='w-full md:w-1/2 mb-5 md:mb-0 flex flex-col gap-y-4  '>
                <SectionHeading heading='Customo-build' />
                <SectionHeading>
                    <h1><span className='text-primary'>Dedicated</span> Server</h1>
                </SectionHeading>
                <SectionPara>
                    'If your use case requires a specific CPU model or any other piece of hardware that’s not <span onClick={()=>router.push('/')} className='text-primary hover:cursor-pointer hover:underline'>listed on our website,</span> we’re happy to build a custom server for you, quickly and affordably.'
                </SectionPara>
            </div>
        </SectionDivider>
    );
};

export default DedicatedServer;