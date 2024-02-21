'use client'
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionImageProps {
    src: string;
    className?: string;
    alt: string;
    children?:React.ReactNode
}

const SectionImage: React.FC<SectionImageProps> = ({ src, className, alt = 'images',children }) => {
    return (
        <div className={twMerge(`w-[290px] h-[320px]  lg:w-[370px] lg:h-[400px] xl:w-[450px] xl:h-[470px] 2xl:w-[510px] 2xl:h-[530px] relative`, className)}>
            <Image src={src} className={twMerge(`w-full h-full absolute z-20`)} fill alt={alt} />
            <div className='top-0 left-0 absolute w-full h-full z-10'>
                <div className='relative w-full h-full'>
                {children}
                </div>
            </div>
        </div>

    );
};

export default SectionImage;