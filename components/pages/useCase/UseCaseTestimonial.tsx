import ClientSuccessStoryes from '@/components/share/ClientSuccessStoryes';
import SectionDivider from '@/components/share/SectionDivider';
import React from 'react';

const UseCaseTestimonial = () => {
    return (
        <SectionDivider>
            <h1 className='text-center text-primary text-[15px] font-semibold  mb-[30px] md:mb-[80px]' style={{ letterSpacing: '3px' }}>WHAT OUR CUSTOMERS SAY</h1>
            <ClientSuccessStoryes/>
        </SectionDivider>
    );
};

export default UseCaseTestimonial;