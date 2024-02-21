'use client'
import Container from '@/components/share/Container';
import { useCaseFeatures, useCaseSwiperSettings } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

const Hero = () => {



    return (
        <Container>
            <div className='w-full h-[90vh] flex flex-col md:flex-row items-center  relative'>
                <div className='w-full md:w-1/2 lg:w-2/5 flex flex-col md:ml-3 md:-mt-32 bg-transparent'>
                    <div className='text-center md:text-left text-4xl xl:text-5xl 2xl:text-6xl space-y-2 font-semibold text-white '>
                        <h1>Build Your <span className='text-primary'>CDN</span></h1>
                        <h1>on 8 Meta,s</h1>
                        <h1>infrastructure</h1>
                    </div>
                    <div className='mt-8 z-10'>
                        <p className='text-secondary text-md text-center md:text-left'>Develop your own Content Delivery Network on the latest custom-built dedicated servers, scalable for your growth. Dozens of upstream providers and direct peers, combined with our private worldwide backbone, provide top reliability and the lowest latency.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2  lg:w-4/6 h-full aspect-square relative  -mt-[60px] md:mt-0'>
                    <Image src={'/images/useCase/Banner-Usecase.png'} fill className='w-full h-full object-cover' alt='useCase banner' />
                </div>
                <div className='absolute bottom-10  md:bottom-0 xl:bottom-5 2xl:bottom-16 w-full z-50 '>
                    
                    <Swiper
                        {...useCaseSwiperSettings}
                    >
                        {
                            useCaseFeatures.map(item => (<SwiperSlide key={item.id}>
                                <FeautresCard {...item} />
                            </SwiperSlide>))
                        }
                    </Swiper>
                </div>

            </div>

        </Container>
    );
};

interface FeautresCardProps {
    id: string,
    title: string,
    subTitle: string
}

const FeautresCard: React.FC<FeautresCardProps> = ({ id, title, subTitle }) => {
    return (
        <div className='w-full px-10 md:px-[30px] h-[100px] md:w-[300px] md:h-[180px] bg-[#0D1615] rounded-xl p-[30px] flex flex-col justify-between opacity-95'>
            <div className='text-primary text-[18px]'>
                {`0${id}`}
            </div>
            <div>
                <h1 className='text-[26px] font-semibold'>{title}</h1>
                <h4 className='text-secondary text-[15px]'>{subTitle}</h4>
            </div>
        </div>
    )
}

export default Hero;