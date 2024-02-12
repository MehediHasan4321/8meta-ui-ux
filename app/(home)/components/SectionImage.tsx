import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionImageProps {
    src: string;
    className?: string;
    alt:string
}

const SectionImage: React.FC<SectionImageProps> = ({ src, className,alt='images' }) => {
    return (
        <div className={twMerge(`w-[280px] h-[270px] md:w-[320px] md:h-[330px] lg:w-[400px] lg:h-[420px] 2xl:w-[510px] 2xl:h-[530px]`,className)}>
            <img src={src} className=' h-full w-full' alt={alt} />
        </div>
    );
};

export default SectionImage;