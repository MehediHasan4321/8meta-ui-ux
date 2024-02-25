'use client'
import LearnMore from '@/components/share/LearnMore';
import { HardwareOption } from '@/types';
import Image from 'next/image';
import React from 'react';
import { IconType } from 'react-icons';


interface OptionsProps {
    option:HardwareOption
}

const Options: React.FC<OptionsProps> = ({ option }) => {
    console.log(option)
    const {heading,image,imageHeading,options} = option

    return (
        <div className='flex justify-between gap-x-4 mt-[140px]'>
            <div className='w-3/5 flex flex-col'>
                <div className='w-full flex justify-between items-center mb-[77px]'>
                    <h1 className='text-4xl font-semibold'>{heading }</h1>
                    <LearnMore text='Learn More' />
                </div>

                <div className='flex flex-col gap-y-[50px]'>
                    {
                        options.map((item,index)=><Para key={index} {...item}/>)
                    }
                </div>
            </div>
            <div className='w-2/5 flex items-center justify-center'>
                <div className=' '>
                    <div className='min-w-[391px] min-h-[312px] aspect-square relative'>
                        <Image src={image} fill alt='ssd' />
                    </div>
                    <h4 className='text-center text-sm text-secondary mt-[30px]'>{imageHeading}</h4>
                </div>
            </div>
        </div>
    );
};


interface ParaProps {
    title?: string;
    value: string[]
    iconBox?: {
        title: string;
        Icon: IconType;
        url?: string
    }
}

const Para: React.FC<ParaProps> = ({ title, value, iconBox }) => {
    return (
        <div className='w-full flex items-start justify-between'>
            {title && <h3 className='text-secondary text-md'>{title}</h3>}
            <div className={title && !iconBox ? 'text-md text-white text-end' : 'text-md text-white text-start'}>
                {
                    value.map((item, index) => <p key={index}>{item}</p>)
                }
            </div>
            {iconBox && !title && <IconBox {...iconBox} />}
        </div>
    )
}

interface IconBoxProps {
    title: string,
    Icon: IconType,
    url?: string
}

const IconBox: React.FC<IconBoxProps> = ({ title, Icon, url }) => {

    

    return (
        <div className='w-fit flex gap-x-2 items-center text-primary cursor-pointer group' title={url}>
            <h4 className='text-md font-semibold uppercase'>{title}</h4>
            <Icon size={18} className='transition group-hover:scale-110' />
        </div>
    )
}

export default Options;