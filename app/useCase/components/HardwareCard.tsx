import { hardware, hardwareRam } from '@/types';
import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HardwareCardProps {
    hardware: hardware,
    className?: string
}

const HardwareCard: React.FC<HardwareCardProps> = ({ hardware, className }) => {

    const { hardwareConfig, hardwareImg, hardwareName, tag, hardwareRams, status } = hardware

    return (
        <div className={twMerge('max-w-[340px] max-h-[480px] overflow-hidden rounded-xl  bg-neutral-900', className)}>
            <div className='pr-[30px] pl-[30px] pt-[30px]'>
                <div className='bg-primary text-white px-[6px] py-[2px] w-fit text-[10px] font-normal rounded-md'>{tag}</div>
                <div className='flex flex-col gap-y-[7px] mt-[26px]'>
                    <h1 className='text-[20px] '>{hardwareName}</h1>
                    <p className='text-[15px] text-secondary'>{hardwareConfig.cores}, {hardwareConfig.threads}, {hardwareConfig.ghz}</p>
                </div>
                <div className='flex gap-x-2 items-center mt-[17px]'>
                    <div className={status==='In Stock'?'w-[10px] h-[10px] rounded-full bg-primary':'w-[10px] h-[10px] rounded-full bg-secondary'} />
                    <p className='text-[14px]'>{status}</p>
                </div>
                <div className='flex flex-col gap-y-3 mt-[50px]'>
                    {
                        hardwareRams.map(item => <Rams key={item.name} {...item} />)
                    }
                </div>
            </div>
            <div className=' h-[130px] relative ml-[30px] '>
                <Image src={hardwareImg} fill className='w-full h-full right-0 bottom-0 object-contain' alt='hardware image' />
            </div>
        </div>
    );
};


interface RamsProps {
    name: string;
    config: string

}

const Rams: React.FC<RamsProps> = ({ name, config }) => {
    return (
        <div className='w-full flex justify-between items-center border-b-[1px] border-neutral-800 pb-3'>
            <div className='text-[14px] text-secondary'>{name} :</div>
            <div className='text-[14px] text-white'>{config}</div>
        </div>
    )
}

export default HardwareCard;