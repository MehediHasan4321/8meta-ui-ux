import React from 'react';
import { twMerge } from 'tailwind-merge';
interface SectionHeadingProps{
    heading?:string;
    className?:string;
    children?:React.ReactNode
}

const SectionHeading:React.FC<SectionHeadingProps> = ({heading,className,children}) => {
    return (
        <div className={twMerge(`text-2xl md:4xl lg:text-[35px] xl:text-5xl  font-semibold text-white text-center md:text-left`,className)}>
            {heading || children}
        </div>
    );
};

export default SectionHeading;