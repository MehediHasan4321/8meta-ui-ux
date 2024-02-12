import React from 'react';
import { IconType } from 'react-icons';

interface IconPointerProps {
    icon: IconType;
}


const IconPointer: React.FC<IconPointerProps> = ({ icon: Icon }) => {
    return (
        <div className=' w-fit p-3 bg-black rounded-lg border-borderColor border-[1px]'>
            <Icon size={30} className='text-primary' />
        </div>
    );
};

export default IconPointer;