'use client'
import React from 'react';
import TestimonialCard from '../pages/home/TestimonialCard';
import { testimonials } from '@/constants';
import Image from 'next/image';

const ClientSuccessStoryes = () => {
    return (
        <div className='flex flex-col md:flex-row items-center  gap-y-16 md:justify-around'>
                <div className='w-full flex justify-center' >
                    <TestimonialCard card={testimonials[0]} className='min-w-[450px]'/>
                </div>
                <div className='w-full flex justify-end md:justify-center'>
                    <div className='relative w-[340px] h-[320px] lg:w-[412px] lg:h-[350px]'>
                        <Image src={'/images/useCase/testimonial-bitmap.png'} fill className='w-full h-full object-contain' alt='testimonial bitmap' />
                        <div className='absolute -bottom-[90px] -left-14 md:-bottom-[95px] lg:-bottom-[110px] md:-left-16'>
                            <div className='relative w-[170px] h-[200px] lg:w-[194px] lg:h-[224px]'>
                                <Image src={'/images/useCase/testimonial-subbitmap.png'} fill className='w-full h-full object-contain' alt='bitmap' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default ClientSuccessStoryes;