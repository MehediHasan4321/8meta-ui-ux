'use client'
import Container from '@/components/share/Container';
import SectionHeading from '@/components/share/SectionHeading';
import SectionPara from '@/components/share/SectionPara';
import Image from 'next/image';
import React from 'react';

const Content = () => {
    return (
        <Container className='mt-[150px] w-full flex flex-col md:flex-row gap-5 justify-center items-center'>
            <div className='flex flex-col gap-y-4 w-3/5'>
                <SectionHeading>
                    Based in <span className='text-primary'>Miami</span>
                </SectionHeading>
                <SectionPara>
                    We specialize in providing high-bandwidth dedicated servers with unparalleled connectivity. Backed by a robust network, abundant server options, and a customer-first approach, we’re here to cater you reliable service you can truly count on.
                </SectionPara>
                <SectionPara>
                    Backed by a robust network, abundant server options, and a customer-first approach, we’re here to cater you reliable service you can truly count on.
                </SectionPara>
            </div>
            <div className='w-[600px] h-[340px] relative rounded-xl  overflow-hidden'>
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