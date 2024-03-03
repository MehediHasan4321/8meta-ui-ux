'use client'

import React from 'react';


interface HardwareNameProps {
    name: string;
    tag?: string;
    active: boolean;
    onClick: (name: string) => void
}

const HardwareName: React.FC<HardwareNameProps> = ({
    name,
    tag,
    active,
    onClick
}) => {
    return (
        <div 
        onClick={()=>onClick(name)}
        className='flex flex-row gap-x-4 items-center my-2'>
            <h3 className={active ? 'text-primary font-normal text-sm lg:text-md cursor-pointer truncate ' : 'text-secondary text-sm lg:text-md font-normal truncate cursor-pointer hover:text-white'}>{name}</h3>
            {tag && <span className='h-fit px-2 rounded-md bg-primary text-white text-[12px] uppercase'>{tag}</span>}
        </div>
    );
};

export default HardwareName;