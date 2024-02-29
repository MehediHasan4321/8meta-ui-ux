'use client'
import Container from '@/components/share/Container';
import Image from 'next/image';
import React from 'react';

const Content = () => {
    return (
        <Container className='mt-[150px] w-full flex flex-col md:flex-row gap-5 justify-center items-center'>
            <div className='flex flex-col gap-y-4 w-full px-4 md:px-0 md:w-3/5'>
                <h1 className='text-4xl ml:text-5xl font-semibold text-center md:text-left'>
                    Based in <span className='text-primary'>Miami</span>
                </h1>
                <p className='text-sm md:text-md text-justify md:text-left'>
                    We specialize in providing high-bandwidth dedicated servers with unparalleled connectivity. Backed by a robust network, abundant server options, and a customer-first approach, we’re here to cater you reliable service you can truly count on.
                </p>
                <p className='text-sm md:text-md text-justify md:text-left'>
                    Backed by a robust network, abundant server options, and a customer-first approach, we’re here to cater you reliable service you can truly count on.
                </p>
            </div>
            <div className='w-80 h-60 md:w-[600px] m:h-[340px] relative rounded-xl  overflow-hidden'>
                <Image

                    className='w-full h-full '
                    src={'/images/company/content-bitmap.png'}
                    fill
                    alt='content images'

                />
            </div>


        </Container>
    );
};

export default Content;