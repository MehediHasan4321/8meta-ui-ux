`use client`

import useDebounce from '@/hooks/useDebounce';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Submenu } from '@/types';
import SubMenu from '@/components/header/SubMenu';
import { usePathname } from 'next/navigation';

interface MenuItemProps{
    name:string,
    subMenu?:Submenu[],
    index:number,
    lastMenu:number
}


const MenuItem:React.FC<MenuItemProps> = ({ name, subMenu=[], index,lastMenu }) => {
    const [show, setShow] = useState(false)
    const [isActiveRoute,setIsActiveRoute] = useState<boolean>(false)
    const pathName = usePathname()


    useEffect(()=>{
         const isFind = subMenu.filter(url=> url.url=== pathName)
         if(isFind.length > 0){
            setIsActiveRoute(true)
         }else{
            setIsActiveRoute(false)
         }
    },[pathName,subMenu])

  
  

    //This hooks return value after your provided time
    const debounceValue = useDebounce(show, 200)

    //this function show the sub menu only
    const handleShow = () => {

        setShow(true)
    }

    //This function hide submenu only
    const handleRemove = () => {

        setShow(false)
    }

    

    const lastIndex = lastMenu === index
    
    return (
        <div   className="relative group">
            <div
                onMouseOver={handleShow}
                onMouseLeave={handleRemove}
                className="flex items-end gap-x-0 lg:gap-x-1 cursor-pointer text-secondary transition hover:text-white "

            >
                <span className={isActiveRoute?`text-sm md:text-md lg:text-[16px] text-primary `:'text-sm md:text-md lg:text-[16px] text-white'}>{name}</span>
                {subMenu.length>0&&<MdKeyboardArrowDown size={20} className={debounceValue ? `rotate-1 transition-all duration-200` : '-rotate-90 transition-all duration-200'} />}
            </div>


            <div
                onMouseOver={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className={debounceValue && subMenu.length>0 ? `absolute top-12 ${lastIndex ? `right-2 lg:left-0` : 'left-0'} min-w-[280px] xl:min-w-[340px] z-10 border-[#1f6867] border-[0.1px] h-auto visible rounded-lg overflow-hidden`
                    :
                    `hidden`}
            >

                <div className="flex flex-col w-full h-full">
                    {
                        subMenu.map((menu, index) => <SubMenu key={menu.name} {...menu} index={index} length={subMenu.length} />)
                    }
                </div>

            </div>
        </div>
    )
}


    export default MenuItem