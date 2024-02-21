'use client'
import { useCase } from '@/types';
import React, { useState } from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


interface UseCaseCartProps {
    useCase: useCase
}


const UseCaseCart: React.FC<UseCaseCartProps> = ({ useCase }) => {
    const { name, desc, icon: Icon } = useCase
    const [isVisible,setIsVisible] = useState<boolean>(false)


    return (
        <div 
        onMouseOver={()=>setIsVisible(true)}
        onMouseLeave={()=>setIsVisible(false)}
        className='w-[300px] min-h-[300px] rounded-lg bg-neutral-900 cursor-pointer  transition hover:bg-useCase-bg bg-no-repeat text-white p-6 group relative'
        
        >
            <div className='w-full h-full flex flex-col justify-center gap-y-5 pr-16'>
                <Icon size={50} className='text-primary'/>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p className='text-secondary text-md font-normal'>{desc}</p>
            </div>
            <div className={isVisible?'visible absolute top-5 right-5':'hidden absolute top-5 right-5'}>
                <FaArrowUpRightFromSquare size={25} className={isVisible?'text-primary transition hover:scale-110':'text-primary'} />
            </div>
        </div>
    )
};

export default UseCaseCart;