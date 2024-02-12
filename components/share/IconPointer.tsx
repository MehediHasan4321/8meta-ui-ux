import React from 'react';
import { IconType } from 'react-icons';

interface IconPointerProps {
    icon: IconType;
}


const IconPointer: React.FC<IconPointerProps> = ({ icon: Icon }) => {
    return (
        <div className=' w-fit p-2 md:p-3 bg-black rounded-lg border-borderColor border-[1px]'>
            <Icon  className='text-primary text-[18px] 2xl:text-[30px]' />
        </div>
    );
};

export default IconPointer;