import { TextPointers } from '@/types';
import React from 'react';

interface SectionTextPointerProps {
    textPointers:TextPointers[]
}

const SectionTextPointer: React.FC<SectionTextPointerProps> = ({ textPointers }) => {
    return (
        <div className='flex flex-row gap-x-2 relative ml-2'>
            <div className=' absolute -left-[6px]  max-w-6 rounded-full h-full border-[#262E2d] border-[0.2px] flex flex-col items-center gap-y-6 py-1 px-3'>
                {/* {textPointers.map((_, index) => <Dot key={index} />)} */}
            </div>
            <div className='flex flex-col gap-y-2 h-full'>
                {
                    textPointers.map((pointer, index) => <Para key={index} {...pointer} />)
                }
            </div>
        </div>
    );
};


const Dot = () => {
    return (
        <div className='rounded-full h-[14px] p-[2px] border-[#333a39] border-[3px] mt-2'>
            <div className='bg-primary w-1 h-1 rounded-full' />
        </div>
    )
}

interface ParaProps{
    higlihtText:string;
    normalText:string
}

const Para:React.FC<ParaProps> = ({higlihtText,normalText})=>{
    return(
        <div className='flex flex-row items-top gap-x-4'>
            <Dot/>
            <p className='text-white text-sm md:text-md lg:text-lg font-semibold'><span className='text-primary'>{higlihtText}</span> {normalText}</p>
        </div>
    )
}

export default SectionTextPointer;