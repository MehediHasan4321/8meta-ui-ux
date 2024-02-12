import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionImageProps {
    src: string;
    className?: string
}

const SectionImage: React.FC<SectionImageProps> = ({ src, className }) => {
    return (
        <div className={twMerge(`w-[510px] h-[530px]`,className)}>
            <img src={src} className=' h-full w-full' alt='heareware-bitmap' />
        </div>
    );
};

export default SectionImage;