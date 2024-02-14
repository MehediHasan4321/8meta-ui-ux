'use client'
import React from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

import { testimonials, settings } from '@/constants';
import TestimonialCard from './TestimonialCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
// import './testimonial.css'

const Testimonials = () => {



    return (
        <div className='container mx-auto my-[137px]'>
            <div className='w-full flex justify-center md:justify-between items-center'>
                <div className='flex  flex-col gap-y-4'>
                    <h1 className='text-4xl lg:text-6xl font-semibold '>Why clients appreciate</h1>
                    <h1 className='text-4xl lg:text-6xl font-semibold'>working with <span className='text-primary'>8meta ?</span></h1>
                </div>
                <div>
                    <button> <MdArrowBackIos size={40} /> </button>
                    <button><MdArrowForwardIos size={40} /></button>
                </div>
            </div>
            <div className='py-20'>
                <Slider {...settings}>
                    {
                        testimonials.map(card => (<div key={card.id}>
                            <TestimonialCard card={card} />
                        </div>))
                    }
                </Slider>
            </div>
            <div className='flex flex-col gap-3 md:flex-row items-center'>
                <div className='w-full md:w-1/2'>
                <p className='font-semibold'>Ranked among the top server providers in the industry on:</p>
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
                                <IoMdStar size={25} fill='white'/>
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


export default Testimonials;