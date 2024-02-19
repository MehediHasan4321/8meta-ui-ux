'use client'
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { CiSearch } from "react-icons/ci";

interface InputProps {
   
    className?: string,
    

}

const Input: React.FC<InputProps> = ({  className }) => {

    const [inputValue,setInputValue] = useState<string>('')

    

    return (

        <div className={twMerge(`w-full bg-black rounded-xl border-[1px] border-borderColor flex items-center  `, className)}>
            <div className='px-5 cursor-pointer'>
                <CiSearch size={25} className='text-primary' />
            </div>
            <input
                className='w-full bg-transparent outline-none placeholder:text-[18px] py-[20px] pl-3'
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                placeholder='Search FAQs Here...'
            />
        </div>

    );
};

export default Input;