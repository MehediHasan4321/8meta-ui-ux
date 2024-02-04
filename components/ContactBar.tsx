import React from 'react';
import { FiPhoneCall, FiAlertCircle } from "react-icons/fi";
import CartMenu from './CartMenu';



const ContactBar = () => {
    return (
        <div className='container mx-auto'>
            <div className='hidden  md:flex justify-between items-center py-4 px-3'>
                <div className='flex flex-row items-center gap-x-1 md:text-[12px] xl:text-sm'>
                    <FiPhoneCall className='text-primary md:mr-1 xl:mr-2 md:text-[16px] xl:text-[20px]' />
                    <span className='text-[#7E8989] font-semibold'>Sales:</span>
                    <span className='text-white'>+11 22 3333 4444</span>
                    <FiAlertCircle className='text-[#7E8989] ml-1' size={13} />
                </div>
                <div className=' hidden xl:flex items-center font-semibold md:text-[12px] xl:text-sm'>
                    <p className='text-[#7E8989]'>Server stock at 17:12:</p>
                    <Para value='1036  × Europe' leftBorder />
                    <Para value='909 × Americas ' leftBorder />
                    <Para value='320 × Asia-Pacific' leftBorder />
                    <Para value=' 129 × Middle East & Africa' />
                </div>
                <div>
                    <CartMenu />
                </div>
            </div>
        </div>
    );
};

interface ParaProps {
    value: string,
    leftBorder?: boolean
}

const Para: React.FC<ParaProps> = ({ value, leftBorder }) => {
    return (
        <div className='flex flex-row items-center gap-x-1'>
            <p className='text-white md:px-1 xl:px-2'>{value}</p>
            {
                leftBorder && <span className='w-[0.1px] h-3 bg-[#7E8989]'></span>
            }
        </div>
    )
}

export default ContactBar;