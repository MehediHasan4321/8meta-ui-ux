import React from 'react';
import { IconType } from 'react-icons';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


interface FAQButtonProps{
    onClick:(faqName:string)=>void;
    name:string,
    icon:IconType,
    active:boolean
}

const FAQButton:React.FC<FAQButtonProps> = ({onClick,name,icon:Icon,active}) => {
    return (
        <button 
        onClick={()=>onClick(name)}
        className={active?'border-[1px] border-borderColor rounded-xl py-2 px-4 md:py-[30px] md:px-10 text-[18px]':'rounded-xl py-2 px-4 md:py-[30px] md:px-10 text-[18px] bg-neutral-950'}>
            <div className='w-full h-full justify-between flex items-center'>
                <div className='flex items-center gap-x-3'>
                <Icon size={25} className={active?'text-primary':'text-[#999]'}/>
                <p className={active?'text-white':'text-secondary'}>{name}</p>
                </div>
                <MdOutlineKeyboardArrowRight  size={25} className={active?'text-primary':'text-[#999]'} />
            </div>
        </button>
    );
};

export default FAQButton;