import Image from 'next/image';
import React from 'react';
import { IconType } from 'react-icons';

interface IconPointerProps {
    icon?: IconType;
    image?:string
}


const IconPointer: React.FC<IconPointerProps> = ({ icon: Icon,image }) => {
    return (
        <div className=' w-fit p-2 md:p-3 bg-black rounded-lg border-borderColor border-[1px]'>
            {Icon&&<Icon  className='text-primary text-[18px] 2xl:text-[30px]' />}
            {image&&<Image color='#00A19C' src={image} height={34} width={34} alt='icon'/>}
        </div>
    );
};

export default IconPointer;