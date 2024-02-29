'use client'

import SectionDivider from '@/components/share/SectionDivider';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { teamMembers, teamMembersSwiperSetting } from "@/constants";
import TeamMemeberCard from "./TeamMemeberCard";
import SwiperButton from "@/components/share/SwiperButton";
import 'swiper/css'



const TeamMembers = () => {

    
    return (
        <SectionDivider className='mt-20'>
            <Swiper {...teamMembersSwiperSetting} className="h-[95vh] md:h-[90vh]">
                <div className='absolute top-0 left-0 w-full flex justify-between items-start'>
                    <div className='flex flex-col gap-y-4'>
                        <h1 className=' text-4xl md:text-5xl text-center md:text-left font-semibold'>Meet <span className='text-primary'>8Meta</span> Team</h1>
                        <div className='text-secondary text-center md:text-left'>
                            <p>20+ dedicated professionals driven by a shared passion </p>
                            <p>for delivering exceptional work.</p>
                        </div>
                    </div>
                    <div className=' hidden md:flex'>
                    <SwiperButton />
                    </div>
                </div>
                <div className="mt-16">
                    {
                        teamMembers.map(member =>
                            <SwiperSlide key={member.name} className=" absolute w-full h-fit top-[200px] bottom-0 order-5">
                                <TeamMemeberCard {...member} />
                            </SwiperSlide>
                        )
                    }
                </div>
                <div className='md:hidden absolute bottom-0 z-[99999] w-full flex justify-center'>
                    <SwiperButton/>
                </div>
            </Swiper>
        </SectionDivider>
    );
};




export default TeamMembers;

