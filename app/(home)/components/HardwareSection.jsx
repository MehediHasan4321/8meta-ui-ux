'use client'
import React from 'react';
import SectionDivider from '@/components/SectionDivider';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/ui/Button';
import { IoIosArrowForward } from "react-icons/io";
import SectionTextPointer from './SectionTextPointer';
import { FaServer } from "react-icons/fa6";
import SectionPara from '@/components/SectionPara';
import IconPointer from '@/components/share/IconPointer';
import SectionImage from './SectionImage';

const HardwareSection = () => {

    const textPointers = [
        {
            higlihtText: 'Same-day delivery',
            normalText: 'for most orders'
        },
        {
            higlihtText: 'Unshared 1×10GE – 2×100GE',
            normalText: 'uplink per server '
        },
        {
            higlihtText: 'Bundle offers ',
            normalText: 'for more servers in multiple locations'
        },
        {
            higlihtText: 'Trial deployments ',
            normalText: 'in any location, with no service limitation'
        },

    ]

    const processors = [
        {
            name: 'Ram',
            value: '256 GB Ram'
        },
        {
            name: 'Storage',
            value: '2 * 4 TB NVMe'
        },
        {
            name: 'Uplinks',
            value: '20 or 40 Gbps'
        }
    ]

    return (
        <SectionDivider className='w-full flex flex-col md:flex-row md:items-center gap-y-10 md:justify-between'>
            <div className='w-full md:w-1/2 mb-5 md:mb-0 flex flex-col gap-y-1 lg:gap-y-4 order-1'>
                <SectionTitle title='Newst Hardware' />
                <SectionHeading heading='Latest Generation' />
                <SectionHeading heading='Servers for All Workloads' />
                <SectionPara para="DataPacket's stock offers a wide array of configuration choices including the latest CPUs. Coupled with an overprovisioned network, even large-scale and complex deployments are executed with ease." />
                <SectionTextPointer textPointers={textPointers} />

                <Button className='px-10 w-fit' icon={IoIosArrowForward} >
                    BROWSE CONFIGURATIONS
                </Button>
            </div>


            <div className='w-full md:w-1/2 flex justify-end xl:justify-center items-center p-2 md:p-6 relative order-2 my-20 md:mt-0'>
                <SectionImage src='/images/heardware-bitmap.png' className='z-10' alt='heareware-bitmap' />
                <div className='absolute -top-[90px] md:-top-5 left-0 2xl:-left-[50px] w-[180px] lg:w-[200px] 2xl:w-[290px] 2xl:h-[320px] border-primary border-2 rounded-2xl z-20 overflow-hidden p-1'>
                    <div className='w-full h-full bg-heardware-gradient-bg rounded-xl z-20 p-2 lg:p-3 2xl:px-[30px] 2xl:pt-[36px] '>
                        <div className='text-white space-y-2'>
                            <h1 className='text-[10px] md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>1x EPYC 7443P</h1>
                            <p className='text-[9px] md:text-[10px] 2xl:text-[13px]'>24 Cores, 48 Threads, 2.85 Ghz</p>
                        </div>
                        <div className='mt-3'>
                            <div className='flex items-center gap-x-3'>
                                <div className='bg-primary p-[3px] md:p-[5px] rounded-full' />
                                <h2 className='text-sm  lg:text-md 2xl:text-lg font-normal'>In Stock</h2>
                            </div>
                        </div>
                        {
                            processors.map(processor => <ProcessorFeac key={processor.name}{...processor} />)
                        }
                    </div>
                </div>
                <div className='absolute -bottom-7 md:-bottom-10 2xl:-bottom-[43px] left-5 md:-left-2  lg:left-0 2xl:left-10 w-[220px] h-[150px] md:h-[180px] lg:w-[250px] lg:h-[220px]  2xl:w-[356px] 2xl:h-[336px] border-borderColor border-[1px] rounded-xl'>
                    <div className='relative w-full h-full'>
                        <div className='absolute  -left-[16px] lg:-left-[20px] 2xl:-left-6  top-8 md:top-10 lg:top-14  2xl:top-24 w-[60px] h-[80px] md:h-[100px] lg:h-[120px] 2xl:w-12  2xl:h-[150px] bg-black flex flex-col justify-between'>
                            <IconPointer icon={FaServer} />
                            <IconPointer icon={FaServer} />
                        </div>
                    </div>
                </div>
            </div>
        </SectionDivider>
    );
};


const ProcessorFeac = ({ name, value }) => {
    return (
        <div className='w-full flex justify-between items-center border-t-[1px] border-[#D8D8D8] my-1 py-1 px-2 md:py-[7px] lg:my-0 lg:py-3 2xl:mt-2'>
            <h2 className='text-secondary font-normal text-[10px] md:text-md 2xl:text-[15px]'>{name}:</h2>
            <p className='text-white font-normal md:font-semibold text-[12px] md:text-md'>{value}</p>
        </div>
    )
}





export default HardwareSection;