'use client'
import React from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { testimonials, swiperSettings } from '@/constants';
import TestimonialCard from './TestimonialCard';
import Image from 'next/image';
import 'swiper/css';
import { SwiperSlide, Swiper, useSwiper } from 'swiper/react';
import SwiperButton from '@/components/share/SwiperButton';
import ServerRankRate from '@/components/share/ServerRankRate';


const Testimonials = () => {

    return (
        <div className='container mx-auto md:my-[137px]'>


            {/* Testimonial  slider sections */}
            <div className='py-8 md:py-20'>


                <Swiper
                    {...swiperSettings}
                    className='relative min-h-[80vh] lg:min-h-[90vh] 2xl:min-h-[80vh]'
                >
                    {
                        testimonials.map(item => <SwiperSlide className='absolute top-[150px] md:top-48' key={item.id}>
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

            <ServerRankRate/>
            
        </div>
    );
};


const SwiperHeader = () => {

    return (
        <div className='w-full flex justify-center md:justify-between items-center'>
            <div className='flex  flex-col gap-y-4 text-center md:text-left'>
                <h1 className='text-[30px] md:text-4xl lg:text-6xl font-semibold '>Why clients appreciate</h1>
                <h1 className='text-[30px] md:text-4xl lg:text-6xl font-semibold'>working with <span className='text-primary'>8meta ?</span></h1>
            </div>
            <div className='hidden md:flex'>
                <SwiperButton />
            </div>
        </div>

    )
}




export default Testimonials;