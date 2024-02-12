'use client'
import SectionDivider from '@/components/SectionDivider';
import SectionHeading from '@/components/SectionHeading';
import SectionPara from '@/components/SectionPara';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import React from 'react';
import SectionTextPointer from './SectionTextPointer';
import { IoIosArrowForward } from 'react-icons/io';
import Button from '@/components/ui/Button';
import { IoDiamondOutline } from "react-icons/io5";
import { LuRadioTower } from "react-icons/lu";
import { FaServer } from "react-icons/fa";
import IconPointer from '@/components/share/IconPointer';
import SectionImage from './SectionImage';


const ServiceSection = () => {

    const textPointers = [
        {
            higlihtText: 'Dedicated account ',
            normalText: 'manager'
        },
        {
            higlihtText: 'Real-time ',
            normalText: 'Slack support'
        },
        {
            higlihtText: '24/7 ',
            normalText: 'tech support'
        },
        {
            higlihtText: 'No commitment, ',
            normalText: 'pay monthly'
        }
    ]


    return (
        <SectionDivider className='w-full flex flex-col md:flex-row md:items-center md:justify-between'>


            <div className='w-full md:w-1/2 mb-5 md:mb-0 flex flex-col gap-y-4 order-1 '>
                <SectionTitle title='Primum Services' />
                <SectionHeading heading='Exceptional Client ' />
                <SectionHeading heading='Service as a standard' />
                <SectionPara para="CServer deployments, routing improvement requests, and even your billing inquiries are each handled by a dedicated and experienced team. This way, no request gets left behind and you will get focused and professional attention." />
                <SectionTextPointer textPointers={textPointers} />
                <Button className='px-10 w-fit' icon={IoIosArrowForward} >
                    LEARN ABOUT 8meta’S APPROACH
                </Button>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center p-2 md:p-6 relative order-2'>
                <SectionImage src='/images/services-bitmap.png' className='z-10' />
                <div className='absolute -top-5 -left-5 w-[320px] h-[340px] border-borderColor border-[1px] rounded-2xl '>
                    <div className='relative w-full h-full m-1'>
                        <div className='absolute -top-8 -left-2 bg-black w-[100px] h-[60px]'>
                            <div className='relative w-full h-full'>
                                <div className='absolute right-0'>
                                    <IconPointer icon={FaServer} />
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-0 -left-6 bg-black w-[60px] h-[200px]'>
                            <div className='relative w-full h-full'>
                                <div className='absolute bottom-0 -left-2'>
                                    <IconPointer icon={IoDiamondOutline} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute -bottom-10 left-10 w-[280px] h-[240px] border-borderColor border-[1px] border-t-0 rounded-2xl '>
                    <div className='relative w-full h-full'>
                        <div className='absolute top-0 -left-6 bg-black'>
                            <IconPointer icon={FaServer} />
                        </div>
                        <div className='absolute top-24 -left-6 bg-black'>
                            <IconPointer icon={LuRadioTower} />
                        </div>
                    </div>
                </div>
            </div>
        </SectionDivider>
    );
};

export default ServiceSection;