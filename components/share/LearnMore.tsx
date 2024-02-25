'use client'

import React from 'react';

import { RiArrowRightSLine } from "react-icons/ri";


interface LearnMoreProsp {
    text: string
}

const LearnMore: React.FC<LearnMoreProsp> = ({ text }) => {
    return (
        <div className='h-fit w-fit flex items-center gap-x-1 text-secondary cursor-pointer'>
            <h4 className='text-[15px]'>{text}</h4>
            <RiArrowRightSLine size={18}/>
        </div>
    );
};

export default LearnMore;