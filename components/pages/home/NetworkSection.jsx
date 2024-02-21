'use client'

import { FiShare2 } from "react-icons/fi";
import { FaConnectdevelop } from "react-icons/fa6";
import { GiAerialSignal } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";


import SectionDivider from "@/components/share/SectionDivider";
import SectionTitle from "@/components/share/SectionTitle";
import SectionHeading from "@/components/share/SectionHeading";
import IconPointer from "@/components/share/IconPointer";
import SectionImage from "./SectionImage";
import SectionTextPointer from "./SectionTextPointer";
import Button from "@/components/ui/Button";
import SectionPara from "@/components/share/SectionPara";







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
            <div className='w-full md:w-1/2 flex justify-end xl:justify-center items-center p-2 md:p-4 lg:px-6 order-2 md:order-1 my-20 md:my-0'>
                <SectionImage className='z-10' src='/images/network-bitmap.png' alt='heareware-bitmap'>


                    <div className=' absolute -top-10 -left-[70px] md:-left-[55px] md:-top-12 lg:-left-[90px] xl:-left-[110px] 2xl:-top-10 2xl:-left-32 w-[150px] h-[150px] md:w-[170px] md:h-[170px] lg:w-[220px] lg:h-[180px] xl:w-[300px] xl:h-[200px] 2xl:w-[330px] 2xl:h-[220px] border-borderColor border-[1px] rounded-2xl '>
                        <div className='relative w-full h-full'>
                            <div className='absolute top-10 md:top-12 lg:top-16 2xl:top-20 -left-4 md:-left-6 bg-black'>
                                <IconPointer icon={AiOutlineGlobal} />
                            </div>
                            <div className='absolute left-4 -bottom-5 md:-bottom-4 md:left-2 lg:left-6 2xl:-bottom-6 2xl:left-12 bg-black w-[220px]'>
                                <IconPointer icon={FiShare2} />
                            </div>
                        </div>
                    </div>


                    <div className='absolute -bottom-[40px] -left-14 md:-bottom-[60px] lg:-bottom-[50px] xl:-bottom-[70px] lg:-left-12 xl:-left-[80px]  2xl:-bottom-[60px] 2xl:-left-20 w-[150px] h-[150px] md:w-[170px] md:h-[170px] lg:w-[190px] lg:h-[190px] xl:w-[300px] xl:h-[290px] 2xl:w-[330px] 2xl:h-[320px] border-borderColor border-[1px] rounded-2xl '>
                        <div className='relative w-full h-full'>
                            <div className='absolute -left-4 md:-left-6 top-7 md:top-10 xl:top-20 2xl:top-16 bg-black h-[90px] md:h-[100px] lg:h-[120px] 2xl:h-[150px] w-fit flex flex-col justify-between items-center'>
                                <IconPointer icon={FaConnectdevelop} />
                                <IconPointer icon={GiAerialSignal} />
                            </div>
                        </div>
                    </div>
                </SectionImage>

            </div>

            <div className='w-full md:w-1/2 mb-5 md:mb-0 flex flex-col gap-y-4 order-1 md:order-2'>
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