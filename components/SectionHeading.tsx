import React from 'react';
import { twMerge } from 'tailwind-merge';
interface SectionHeadingProps{
    heading:string;
    className?:string
}

const SectionHeading:React.FC<SectionHeadingProps> = ({heading,className}) => {
    return (
        <div className={twMerge(`text-2xl md:4xl lg:text-[35px] xl:text-5xl  font-semibold text-white text-center md:text-left`,className)}>
            {heading}
        </div>
    );
};

export default SectionHeading;