import SectionImage from '@/app/(home)/components/SectionImage';
import SectionDivider from '@/components/SectionDivider';
import SectionHeading from '@/components/SectionHeading';
import SectionPara from '@/components/SectionPara';
import IconPointer from '@/components/share/IconPointer';

import React from 'react';

const DedicatedManager = () => {
    return (
        <SectionDivider className='w-full flex flex-col gap-6 md:flex-row md:items-center justify-around '>
            <div className='w-full md:w-1/2 flex justify-start xl:justify-center items-center p-2 md:p-4 lg:px-6 relative order-1 my-20 md:my-0 '>
                <SectionImage src='/images/useCase/manager.png' alt='dedicated manager image' className='2xl:w-[620px] 2xl:h-[410px]'>
                    <div className='absolute w-[100px] border-t-[1px] border-borderColor -right-[20px] lg:-right-[25px] top-10'>
                        <div className='relative w-full'>
                            <div className='absolute -right-[50px] lg:-right-[60px] -top-7'>
                                <IconPointer image='/images/icons/manager.png' />
                            </div>
                        </div>
                    </div>
                    <div className='absolute w-[70px] h-[60px] border-t-[1px] border-r-[1px] border-borderColor -right-[48px] lg:-right-[56px] bottom-[40%] rounded-2xl'>
                        <div className='relative w-full'>
                            <div className='absolute -right-[25px] lg:-right-[25px]  2xl:-right-[30px] top-7'>
                                <IconPointer image='/images/icons/Globel.png'/>
                            </div>
                        </div>
                    </div>

                    <div className='absolute w-[150px] lg:w-[200px] 2xl:w-[286px] h-[53px] border-b-[1px] border-r-[1px] border-l-[1px] border-borderColor -right-[40px] -bottom-[32px] rounded-2xl '>
                    <div className='relative w-full h-full'>
                            <div className='absolute -right-[20px] md:-right-[25px] lg:-right-[30px] 2xl:-right-[35px] bottom-10'>
                                <IconPointer image='/images/icons/call.png' />
                            </div>
                        </div>
                    </div>
                </SectionImage>
            </div>



            <div className='w-full md:w-1/2 mb-5 md:mb-0 md:ml-10 flex flex-col gap-y-4 order-2 '>
                <SectionHeading>
                    Accouont <span className='text-primary'>Account</span></SectionHeading>
                <SectionHeading className='text-primary'> Manager</SectionHeading>
                <SectionPara>
                    As our client, you’ll get a personal Slack channel with 24/7 access to technical support. You can also contact us via live chat, email or phone - we’re here to help you with any sales or network related questions.
                </SectionPara>
            </div>
        </SectionDivider>
    );
};

export default DedicatedManager;