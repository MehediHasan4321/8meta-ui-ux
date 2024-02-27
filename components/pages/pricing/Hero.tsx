'use client'

import Container from '@/components/share/Container';
import React from 'react';

const Hero = () => {
    return (
        <Container className='w-full h-[40vh] flex justify-center items-center'>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-6xl font-semibold text-white text-center'>Server Pricing</h1>
                <div className='text-center leading-[30px] text-white text-lg'>
                    <p>Unlimited <span className='text-secondary'>data transfer,</span> unshared <span className='text-secondary'>1×10GE — 2×100GE ports,</span> unmetered <span className='text-secondary'>DDoS<br /> protection and no commitment.</span> <span className='text-primary underline hover:cursor-pointer'>Learn more</span></p>
                </div>
            </div>
        </Container>
    );
};

export default Hero;