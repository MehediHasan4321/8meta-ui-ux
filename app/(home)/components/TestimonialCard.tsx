import { Testimonial } from '@/types';
import React from 'react';


interface TestimonialCardProps {
    card: Testimonial
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ card }) => {
    const { employeePosition, logo, name, review, avater } = card
    
    return (
        <div className='w-full xl:w-[540px] min-h-fit bg-neutral-950 text-white p-[70px] flex flex-col gap-y-10 justify-start rounded-lg '>
            <div>
                <img src={logo} />
            </div>
            <div>
                <p className='text-lg'>{review}</p>
            </div>
            <div className='flex flex-row gap-x-4 items-center'>
                <div className='w-[80px] h-[80px] rounded-full border-[1px] border-borderColor overflow-hidden'>
                    <img src={'/images/testimonial-avater.png'}  className='w-full h-full object-cover' alt='avater'/>
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