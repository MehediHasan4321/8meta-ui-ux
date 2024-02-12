'use client'
import SectionDivider from '@/components/SectionDivider';
import SectionHeading from '@/components/SectionHeading';
import SectionPara from '@/components/SectionPara';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/ui/Button';
import SectionTextPointer from './SectionTextPointer';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineGlobal } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import IconPointer from '@/components/share/IconPointer';
import { GiAerialSignal } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";



const NetworkSection = () => {

    const textPointers = [
        {
            higlihtText: 'DDoS protected ',
            normalText: 'network'
        },
        {
            higlihtText: 'Unmetered ',
            normalText: 'bandwidth'
        },
        {
            higlihtText: "15 transit carriers ",
            normalText: 'and 240+ PNIs'
        },
        {
            higlihtText: 'Bandwidth pooling ',
            normalText: 'available '
        }
    ]

    return (
        <SectionDivider className='w-full flex flex-col md:flex-row md:items-center md:justify-between'>
            <div className='w-full md:w-1/2 flex justify-center items-center p-2 md:p-6 relative'>
                <Image src={'/images/network-bitmap.png'} className='z-10' width={510} height={530} alt='heareware-bitmap' />
                <div className=' absolute -top-8 left-0 w-[336px] h-[250px] border-borderColor border-[1px] rounded-2xl '>
                    <div className='relative w-full h-full'>
                        <div className='absolute top-20 -left-6 bg-black'>
                            <IconPointer icon={AiOutlineGlobal}/>
                        </div>
                        <div className='absolute -bottom-6 left-12 bg-black w-[220px]'>
                            <IconPointer icon={FiShare2}/>
                        </div>
                    </div>
                </div>
                <div className='absolute -bottom-[53px] left-10 w-[356px] h-[250px] border-borderColor border-[1px] rounded-xl '>
                    <div className='relative w-full h-full'>
                        <div className='absolute -left-6 top-10 bg-black h-[150px] w-fit flex flex-col justify-between items-center'>
                            <IconPointer icon={FaConnectdevelop} />
                            <IconPointer icon={GiAerialSignal} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-1/2 mb-5 md:mb-0 flex flex-col gap-y-4  '>
                <SectionTitle title='global network' />
                <SectionHeading heading='Backed by low-latency' />
                <SectionHeading heading='150+ Tbps network' />
                <SectionPara para="Consistently low latency times, zero packet loss, and no saturation during peak times are the results of real‑time network monitoring, daily routing adjustments, and the use of multiple networks interconnected through DataPacket’s global private backbone." />
                <SectionTextPointer textPointers={textPointers} />
                <Button className='px-10 w-fit' icon={IoIosArrowForward} >
                    Explore Locations
                </Button>
            </div>



        </SectionDivider>
    );
};

export default NetworkSection;