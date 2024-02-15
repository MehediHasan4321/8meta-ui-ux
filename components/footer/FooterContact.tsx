'use client'
import {  FooterContactItem } from '@/types';
import React from 'react';
import { IconType } from 'react-icons';

interface FooterContactProps{
    contact:FooterContactItem,
    menuName:string
}

const FooterContact:React.FC<FooterContactProps> = ({contact,menuName}) => {
    const {mail,socialMedia,contactNum} = contact

    return (

        <div className='w-full flex flex-col justify-start gap-y-6 px-4'>
            <div className='text-md text-secondary font-semibold'>{menuName}</div>
            <div className='text-secondary text-sm cursor-pointer transition hover:text-white'>
                {mail}
            </div>
            <div className='flex flex-col gap-y-6 justify-start'>
                {
                    contactNum.map(num=>(
                        <div key={num} 
                        className='text-secondary text-sm cursor-pointer transition hover:text-white'
                        >{num}</div>
                    ))
                }
            </div>
            <div className='flex flex-row gap-3 items-center'>
                {
                    socialMedia.map(item=><Socila key={item.title} {...item}/>)
                }
            </div>
        </div>
    );
};

interface SocilaProps{
    icon:IconType,
    title:string
}
const Socila:React.FC<SocilaProps> = ({icon:Icon,title})=>{
    return(
        <div className=' cursor-pointer ' title={title}>
            <Icon size={20}/>
        </div>
    )
}

export default FooterContact;