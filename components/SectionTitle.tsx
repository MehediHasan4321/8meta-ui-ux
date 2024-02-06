import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps{
    title:string;
    className?:string
}

const SectionTitle:React.FC<SectionTitleProps> = ({title,className}) => {
    return (
        <p className={twMerge(`text-sm  lg:text-lg font-semibold tracking-[5px] text-primary uppercase text-center md:text-left`,className)}>{title}</p>
    );
};

export default SectionTitle;