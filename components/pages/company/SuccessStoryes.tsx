import SectionDivider from '@/components/share/SectionDivider';
import SectionHeading from '@/components/share/SectionHeading';
import SwiperButton from '@/components/share/SwiperButton';
import ClientSuccessStoryes from '@/components/share/ClientSuccessStoryes';
import React from 'react';
import ServerRankRate from '@/components/share/ServerRankRate';

const SuccessStoryes = () => {
    return (
        <SectionDivider>
            <div className='w-full flex justify-between items-center'>
                <SectionHeading>
                    <h1>Client Success <span className='text-primary'>Stories</span></h1>
                </SectionHeading>
                <SwiperButton />
            </div>
            <div className='mt-[80px]'>
                <ClientSuccessStoryes />
            </div>
            <div className='mt-16 w-full'>
                <ServerRankRate />
            </div>
        </SectionDivider>
    );
};

export default SuccessStoryes;