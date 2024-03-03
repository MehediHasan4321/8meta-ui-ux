import Container from '@/components/share/Container';
import React from 'react';

const Hero = () => {
    return (
        <Container className='min-h-[30vh] flex justify-center items-center'>
            <div className='flex flex-col gap-y-4 items-center'>
                <h1 className='text-4xl md:text-5xl font-semibold text-center'>Latest Hareware</h1>
                <p className='text-secondary w-full md:w-4/5 lg:w-2/5 text-sm md:text-lg text-center px-1'>The exact hardware specifications of standard 8meta servers are listed below. Looking for a custom CPU model, high-capacity NVMe drives or an HDD array for mass storage? <span className='text-white underline'>Let us know</span> what your requirements are and we’ll deliver.</p>
            </div>
        </Container>
    );
};

export default Hero;