'use client'
import { FooterMenuItem } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';

interface FooterMenuItemsProps{
    menuItems:FooterMenuItem
}


const FooterMenuItems:React.FC<FooterMenuItemsProps> = ({menuItems}) => {
    const {name,url} = menuItems;
    const router = useRouter()
    return (
        <div className='w-full '>
            <h4 
            onClick={()=>router.push(url)}
            className='text-secondary text-sm cursor-pointer transition hover:text-white'>{name}</h4>
        </div>
    );
};

export default FooterMenuItems;