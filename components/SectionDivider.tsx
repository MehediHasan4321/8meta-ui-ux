import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionDividerProps{
    children:React.ReactNode;
    className?:string
}


const SectionDivider:React.FC<SectionDividerProps> = ({children,className}) => {
    return (
        <div className={twMerge(`mt-16 md:mt-20 lg:mt-32 xl:mt-48 2xl:mt-[235px] container mx-auto px-2`,className)}>
            {children}
        </div>
    );
};

export default SectionDivider;