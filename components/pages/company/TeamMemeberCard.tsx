import Image from 'next/image';
import React from 'react';
import { IconType } from 'react-icons';

interface TeamMemeberCardProps {
    name: string;
    avater: string;
    position: string;
    socialIcon: {
        Icon: IconType,
        title: string,
        url?: string
    }

}


const TeamMemeberCard: React.FC<TeamMemeberCardProps> = ({
    name,
    avater,
    position,
    socialIcon
}) => {
    
    const {Icon,title,url} = socialIcon

    return (
        <div className='w-[420px] h-[560px] rounded-[30px] overflow-hidden relative bg-primary'>
            <Image src={avater} fill className='w-full h-full' alt='team memeber' />


            <div className='absolute bottom-0 w-full h-32 bg-blackAcent/20'>
                <div className='w-full h-full px-[30px] flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl font-semibold'>{name}</h1>
                        <p className='text-md tracking-widest uppercase'>{position}</p>
                    </div>
                    <div className='w-8 h-8  rounded-full bg-white flex items-center justify-center cursor-pointer transition hover:scale-110' title={title}>
                        <Icon size={20} fill='#333'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemeberCard;