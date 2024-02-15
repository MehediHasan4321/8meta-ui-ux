'use client'
import React from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { testimonials, swiperSettings } from '@/constants';
import TestimonialCard from './TestimonialCard';
import Image from 'next/image';
import 'swiper/css';
import { SwiperSlide, Swiper, useSwiper } from 'swiper/react';


const Testimonials = () => {

    return (
        <div className='container mx-auto md:my-[137px]'>


            {/* Testimonial  slider sections */}
            <div className='py-8 md:py-20'>


                <Swiper
                    {...swiperSettings}
                    className='relative min-h-[80vh]'
                >
                    {
                        testimonials.map(item => <SwiperSlide className='absolute top-20 md:top-48' key={item.id}>
                            <TestimonialCard card={item} />
                        </SwiperSlide>)
                    }

                    {/* Swiper navigation button only visible when it is in medium devices */}
                    <div className=' absolute w-full top-0 right-0'>
                        <SwiperHeader />
                    </div>

                    {/* Swiper navigation button only visible when it is in mobile divices */}

                    <div className='visible md:hidden absolute bottom-0 left-[40%]'>
                        <SwiperButton />
                    </div>
                </Swiper>
            </div>


            <div className='flex flex-col gap-3 md:flex-row items-center'>
                <div className='w-full md:w-1/2'>
                    <p className='text-[14px] md:text-[18px] text-center md:text-left font-semibold'>Ranked among the top server providers in the industry on:</p>
                </div>
                <div className='flex flex-row gap-x-10 items-center'>
                    <div className='flex flex-row gap-x-4 items-center'>
                        <div>
                            <Image src={'/images/sycan.png'} height={30} width={30} alt='btimap' />
                        </div>
                        <div className='border-[1px] border-borderColor py-2 px-3 rounded-xl flex flex-row gap-x-6 items-center'>
                            <p>4.7</p>
                            <IoMdStar fill='orange' />
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-4 items-center'>
                        <div className='flex flex-row items-center gap-x-4'>
                            <div className='flex items-center'>
                                <IoMdStar size={25} fill='white' />
                                <h1 className='text-[18px] text-white'>TrustPilot</h1>
                            </div>
                            <div className='border-[1px] border-borderColor py-2 px-3 rounded-xl flex flex-row gap-x-6 items-center'>
                                <p>4.9</p>
                                <IoMdStar fill='orange' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const SwiperHeader = () => {

    return (
        <div className='w-full flex justify-center md:justify-between items-center'>
            <div className='flex  flex-col gap-y-4'>
                <h1 className='text-4xl lg:text-6xl font-semibold '>Why clients appreciate</h1>
                <h1 className='text-4xl lg:text-6xl font-semibold'>working with <span className='text-primary'>8meta ?</span></h1>
            </div>
            <div className='hidden md:flex'>
                <SwiperButton />
            </div>
        </div>

    )
}

const SwiperButton = () => {
    const swiper = useSwiper()
    return (
        <div className='flex flex-row gap-2 items-center'>
            <MdArrowBackIos
            
                className='cursor-pointer disabled:text-secondary'
                onClick={() => swiper.slidePrev()} size={40} />
            <MdArrowForwardIos
                className='cursor-pointer'
                onClick={() => swiper.slideNext()} size={40} />
        </div>
    )
}


export default Testimonials;