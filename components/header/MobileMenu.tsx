'use client'


import useDebounce from '@/hooks/useDebounce';
import { Submenu } from '@/types';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import MobailSubMenu from './MobailSubMenu';
import { useRouter } from 'next/navigation';


interface MobileMenuItemProps {
    name: string,
    subMenu: Submenu[],
    index: number,
    lastMenu: number,
    url?:string
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ name, subMenu,url }) => {

    const [show, setShow] = useState<boolean>(false)
    const debounceValue = useDebounce(show, 200)
    const router = useRouter()

    //This function hide submenu only
    const handleRemove = () => {

        setShow(false)
    }

  const handleUrl = ()=>{
    if(subMenu.length>0){
        return
    }else{
        //@ts-ignore
        router.push(url)
    }
  }

    return (
        <div
        //@ts-ignore
        onClick={handleUrl}
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
            className='relative'>
            <div className='transition  hover:bg-neutral-800 rounded-md text-secondary hover:text-white py-2 px-2 flex gap-x-2 items-center cursor-pointer select-none '>
                <p className='text-md font-normal ml-4'>{name}</p>
                {subMenu.length > 0 && <MdKeyboardArrowDown size={20} className={`${debounceValue ? `rotate-0 duration-200` : '-rotate-90 duration-200'}`} />}
            </div>
            {
                debounceValue && subMenu.length > 0 && <div className='absolute top-10 left-[90px] min-w-[280px]  z-10 border-[#1f6867] border-[0.1px] h-auto visible rounded-lg overflow-hidden'>
                    {
                        subMenu.map(menu => <MobailSubMenu key={menu.name} {...menu} handleRemoveSubMenu={handleRemove} />)
                    }
                </div>
            }
        </div>
    );
};

export default MobileMenuItem;