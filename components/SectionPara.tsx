import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionParaProps {
    para?: string;
    children?:React.ReactNode;
    className?:string
}

const SectionPara: React.FC<SectionParaProps> = ({ para,children,className }) => {
    return (
        <div className={twMerge(`w-full xl:w-4/6 text-center md:text-left leading-[25px]`,className)}>
            <p className='text-secondary text-[12px] lg:text-md 2xl:text-lg '>{para||children}</p>
        </div>
    );
};

export default SectionPara;