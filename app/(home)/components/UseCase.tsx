'use client'

import { useCases } from '@/constants';
import React from 'react';
import UseCaseCart from './UseCaseCart';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation';


const UseCase = () => {
    const router = useRouter()
    return (
        <div className='container mx-auto flex flex-col gap-y-5 my-10'>
            <div className='flex flex-col justify-center items-center gap-y-6 '>
                <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-white'>Performance Precisely Tailored</h1>
                <h1 className='text-2xl md:-text-4xl lg:text-5xl xl:text-7xl font-semibold text-primary'>For Your Use Case</h1>
            </div>
            <div className='w-full my-[70px] flex flex-wrap justify-center items-center gap-10'>
                {
                    useCases.map(item=><UseCaseCart key={item.name} useCase={item}/>)
                }
            </div>
            <div className='flex justify-center w-full'>

                
                
                <button
                onClick={()=>router.push('/useCase')}
                className='text-primary text-lg font-semibold py-3 border-b-2 border-primary flex items-center gap-x-3'>
                    See All Use Case
                    <MdKeyboardArrowRight size={25}/>
                </button>
            </div>
        </div>
    );
};




export default UseCase;