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
            name:'Ram',
            value:'256 GB Ram'
        },
        {
            name:'Storage',
            value:'2 * 4 TB NVMe'
        },
        {
            name:'Uplinks',
            value:'20 or 40 Gbps'
        }
    ]

    return (
        <SectionDivider className='w-full flex flex-col md:flex-row md:items-center md:justify-between'>
            <div className='w-full md:w-1/2 mb-5 md:mb-0 flex flex-col gap-y-4  '>
                <SectionTitle title='Newst Hardware' />
                <SectionHeading heading='Latest Generation' />
                <SectionHeading heading='Servers for All Workloads' />
                <SectionPara para="DataPacket's stock offers a wide array of configuration choices including the latest CPUs. Coupled with an overprovisioned network, even large-scale and complex deployments are executed with ease."/>
                <div className='mt-4 mb-6'>
                    <SectionTextPointer textPointers={textPointers} />
                </div>
                <Button className='px-10 w-fit' icon={IoIosArrowForward} >
                    BROWSE CONFIGURATIONS
                </Button>
            </div>


            <div className='w-full md:w-1/2 flex justify-center items-center p-2 md:p-6 relative'>
                <Image src={'/images/heardware-bitmap.png'} className='z-10' width={510} height={530} alt='heareware-bitmap' />
                <div className='absolute -top-5 -left-[50px] w-[290px] h-[320px] border-primary border-2 rounded-2xl z-20 overflow-hidden p-1'>
                    <div className='w-full h-full bg-heardware-gradient-bg rounded-xl z-20 px-[30px] pt-[36px] '>
                        <div className='text-white space-y-2'>
                            <h1 className='text-md md:text-xl'>1x EPYC 7443P</h1>
                            <p className='text-sm'>24 Cores, 48 Threads, 2.85 Ghz</p>
                        </div>
                        <div className='mt-3'>
                            <div className='flex items-center gap-x-3'>
                                <div className='bg-primary p-[5px] rounded-full' />
                                <h2 className='text-md font-normal'>In Stock</h2>
                            </div>
                        </div>
                        <div>
                            {
                                processors.map(processor=><ProcessorFeac key={processor.name}{...processor}/>)
                            }
                        </div>
                    </div>
                </div>
                <div className='absolute -bottom-[43px]  left-10 w-[356px] h-[336px] border-borderColor border-[1px] rounded-xl'>
                    <div className='relative w-full h-full'>
                        <div className='absolute -left-6 bg-black  top-24 w-12 h-[150px] flex flex-col justify-between'>
                            <div className='border-[1px] border-borderColor p-3 rounded-lg '>
                                <Image src={'/images/server.png'} className='object-cover' width={40} height={40} alt='server'/>
                            </div>
                            <div className='border-[1px] border-borderColor p-3 rounded-lg '>
                                <FaServer className='text-primary' size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionDivider>
    );
};


const ProcessorFeac = ({name,value})=>{
    return(
        <div className='w-full flex justify-between items-center border-t-[1px] border-[#D8D8D8] my-2 py-3'>
            <h2 className='text-secondary font-normal text-md'>{name}:</h2>
            <p className='text-white font-semibold text-md'>{value}</p>
        </div>
    )
}





export default HardwareSection;