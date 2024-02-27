'use client'

import { RiErrorWarningLine } from 'react-icons/ri';

interface CPUProps {
    name: string;
    active?: boolean;
    onClick: (cpuName: string) => void;
    cpu: { cores: string; threads: string; ghz: string };
    tag?: string
}

const CPU: React.FC<CPUProps> = ({ active, onClick, cpu, tag, name }) => {
    return (
        <div
            onClick={() => onClick(name)}
            className={active ?
                'bg-[#0D1817] border-[1px] border-borderColor rounded-lg py-[14px] px-5 cursor-pointer relative'
                :
                'bg-[#0D1817] rounded-lg py-[14px] px-5 cursor-pointer relative'}
        >
            <h3 className={active ? 'text-primary' : 'text-white'}>{name}</h3>
            <div className='flex flex-row truncate text-[12px] text-secondary  '>
                <span>{cpu.cores}</span>,
                <span>{cpu.threads}</span>,
                <span>{cpu.ghz}</span>
            </div>
            <div className='absolute -left-5 top-6'>
                {
                    tag === 'NEW' && <div className='px-2 w-fit bg-primaryLight text-white text-[12px] rounded-md -rotate-90 '>
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