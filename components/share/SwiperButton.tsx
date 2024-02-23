'use client'
import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { useSwiper } from 'swiper/react';

interface SwiperButtonProps{
    disable?:boolean
}


const SwiperButton:React.FC<SwiperButtonProps> = ({disable}) => {
    const swiper = useSwiper()
    return (
        <div className='flex flex-row gap-2 items-center z-[9999]'>
            <MdArrowBackIos

                className='cursor-pointer disabled:text-secondary'
                onClick={() => swiper?.slidePrev()} size={40} />
            <MdArrowForwardIos
                className='cursor-pointer'
                onClick={() => swiper?.slideNext()} size={40} />
        </div>
    )
}

export default SwiperButton;