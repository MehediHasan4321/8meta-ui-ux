import { Testimonial } from '@/types';
import Image from 'next/image';
import React from 'react';


interface TestimonialCardProps {
    card: Testimonial
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ card }) => {
    const { employeePosition, logo, name, review, avater } = card
    
    return (
        <div className='w-full xl:w-[540px] min-h-fit bg-neutral-950 text-white p-[70px] flex flex-col gap-y-10 justify-start rounded-lg '>
            <div className=''>
                <Image src={logo} alt='logo' height={130} width={130} />
            </div>
            <div>
                <p className='text-lg'>{review}</p>
            </div>
            <div className='flex flex-row gap-x-4 items-center'>
                <div className='w-[80px] h-[80px] rounded-full border-[1px] border-borderColor overflow-hidden'>
                    <Image height={80} width={80} src={'/images/testimonial-avater.png'}  className='w-full h-full object-cover' alt='avater'/>
                </div>
                <div>
                    <h2 className='text-lg font-semibold'>{name}</h2>
                    <p className='text-sm'>{employeePosition}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;