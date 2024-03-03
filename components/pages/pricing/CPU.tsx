'use client'

import { RiErrorWarningLine } from 'react-icons/ri';

interface CPUProps {
    name: string;
    active?: boolean;
    onClick: (data:{name: string,price:number}) => void;
    cpu: { cores: string; threads: string; ghz: string };
    tag?: string;
    price:number
}

const CPU: React.FC<CPUProps> = ({ active, onClick, cpu, tag, name,price}) => {
    return (
        <div
            onClick={() => onClick({name,price})}
            className={active ?
                'bg-[#0D1817] border-[1px] border-borderColor rounded-lg py-[14px] px-5 cursor-pointer relative'
                :
                'bg-[#0D1817] rounded-lg py-[14px] px-5 cursor-pointer relative'}
                title={name}
        >
            <h3 className={active ? 'text-primary text-sm md:text-md truncate' : 'text-white truncate text-sm md:text-md'}>{name}</h3>
            <div className='flex flex-row truncate text-[10px] lg:text-[8px] xl:text-[10px] text-secondary  '>
                <span>{cpu.cores}</span>,
                <span>{cpu.threads}</span>,
                <span>{cpu.ghz}</span>
            </div>
            <div className='absolute -left-[10px] top-6'>
                {
                    tag === 'NEW' && <div className='px-[5px] w-fit bg-primaryLight text-white text-[11px] rounded-md -rotate-90 '>
                        {tag}
                    </div>
                }
            </div>
            <div className='absolute top-2 right-2'>
                <RiErrorWarningLine color={active ? '#00D6D0' : '#999'} size={18} />
            </div>
        </div>
    );
};

export default CPU;