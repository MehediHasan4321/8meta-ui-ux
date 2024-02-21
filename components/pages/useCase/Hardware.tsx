'use client'

import Button from '@/components/ui/Button';
import { hardwares, useCaseHardwareSwiperSetting } from '@/constants';
import React from 'react';
import HardwareCard from './HardwareCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionDivider from '@/components/share/SectionDivider';
import SectionHeading from '@/components/share/SectionHeading';
import SectionPara from '@/components/share/SectionPara';

const Hardware = () => {
    return (
        <SectionDivider className='flex flex-col md:flex-row items-center gap-x-6 overflow-hidden mt-32 md:mt-20'>
            <div className='w-full md:w-[45%] flex flex-col gap-y-4 '>
                <SectionHeading>
                    Newest hardware
                </SectionHeading>
                <SectionHeading>
                    to elevate your CDN
                </SectionHeading>
                <SectionPara >
                    8Meta has servers with both single and dual-CPU configuratioin in stock, suitable whether you need them for transcoding, streaming or storing your video content.
                </SectionPara>
                <SectionPara>
                    Looking for a custom CPU model, higher-capacity NVMe drives or other configurations? Talk to us.
                </SectionPara>
                <div>
                    <Button className='w-fit '>
                        Request A Quote
                    </Button>
                </div>
            </div>
            <div className='w-full md:w-3/6'>
                <Swiper {...useCaseHardwareSwiperSetting}>
                    {
                        hardwares.map(item=><SwiperSlide key={item.id}><HardwareCard hardware={item} /></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </SectionDivider>
    );
};

export default Hardware;