import Container from '@/components/share/Container';
import IconPointer from '@/components/share/IconPointer';
import SectionDivider from '@/components/share/SectionDivider';
import SectionHeading from '@/components/share/SectionHeading';
import Image from 'next/image';
import React from 'react';

const Features = () => {

    const fCards = [
        {
            title: '+700',
            heading: 'New servers in production each month',
            desc: 'with latest hardware components, so you’re always equipped for speed and efficiency.'
        },
        {
            title: '150+ Tbps',
            heading: 'Low latency network with zero packet loss',
            desc: 'built through partnerships with leading transit providers, direct PNIs and local ISPs.'
        },
        {
            title: '12',
            heading: 'Data center locations on 6 continents',
            desc: 'and we’re on a mission to expand, adding 6 new locations annually.'
        }
    ]

    return (
        <SectionDivider>
            <div className='flex flex-col gap-y-7'>
                <div className='flex flex-col gap-y-4'>
                    <SectionHeading>
                        <h1><span className='text-primary'>Boosting</span> data delivery efficiency</h1>
                    </SectionHeading>
                    <SectionHeading>
                        <h1>for tech and media companies</h1>
                    </SectionHeading>
                </div>
                <div className='w-full h-auto flex items-center justify-around flex-wrap mt-[70px]'>
                    {
                        fCards.map(card => <FCard key={card.title} {...card} />)
                    }
                </div>
                <div className='mt-[200px] w-full h-[510px] hidden md:flex gap-x-[40px]'>
                    <div className='w-3/5 h-full relative rounded-xl'>
                        <Image src={'/images/company/company-manager-1.png'} className='w-full h-full ' fill alt='manager' />

                        {/* 1st iconPointer box */}
                        <div className='w-[235px] h-[37px] border-t-[1px] border-r-[1px] border-borderColor absolute -right-[230px] bottom-[85px] rounded-r-xl '>
                            <div className='relative w-full h-full'>
                                <div className='absolute -right-8 top-6'>
                                    <IconPointer image='/images/icons/network.png' />
                                </div>
                            </div>
                        </div>

                        {/* 2nd iconPointer box */}

                        <div className='w-10 border-t-[1px] border-borderColor absolute bottom-[65px] -right-[40px] '>
                            <div className='relative w-full h-full'>
                                <div className=' absolute -right-[60px] -top-7'>
                                    <IconPointer image='/images/icons/server.png' />
                                </div>
                                <div className='w-[332px] h-[40px] border-l-[1px] border-b-[1px] border-r-[1px] border-borderColor absolute -bottom-[60px] left-[70px] rounded-xl '>
                                    <div className='relative w-full h-full'>
                                        <div className='absolute -right-7 -top-[50px]'>
                                            <IconPointer image='/images/icons/Globel.png '/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='w-2/5 h-full relative '>
                        <div className='w-[390px] h-[360px] rounded-xl relative'>
                            <Image src={'/images/company/company-manager-2.png'} className='w-full h-full ' fill alt='manager' />
                        </div>

                    </div>
                </div>
            </div>
        </SectionDivider>
    );
};

export default Features;


interface FCardProps {
    title: string;
    heading: string;
    desc: string
}

const FCard: React.FC<FCardProps> = ({ title, heading, desc }) => {
    return (
        <div className='w-[420px] h-[300px] bg-neutral-900 rounded-xl overflow-hidden flex flex-col gap-y-6 pt-[57px] pl-[40px] pb-[40px] pr-[50px] '>
            <h1 className='text-6xl text-primary font-semibold '>{title}</h1>
            <div className='flex flex-col gap-y-2'>
                <h3 className='text-2xl text-white font-semibold'>{heading}</h3>
                <p className='text-sm text-secondary'>{desc}</p>
            </div>
        </div>
    )
}