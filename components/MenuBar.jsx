'use client'

import { MdNetworkCheck } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from 'next/image';
import React, { useState } from 'react';
import useDebounce from "@/hooks/useDebounce";
import Button from "@/ui/Button";

const MenuBar = () => {

    const menus = [
        {
            name: 'Whay 8Meta',
            subMenu: [
                {
                    name: 'Premume Network',
                    icon: MdNetworkCheck,
                    url: '/'
                },
                {
                    name: 'Exceptional client service',
                    icon: IoDiamondOutline,
                    url: '/'
                },
                {
                    name: 'Built-in DDoS protection',
                    icon: MdOutlineSecurity,
                    url: ''
                },
                {
                    name: 'Latest hardware',
                    icon: GrStorage,
                    url: '/'
                }
            ]
        },
        {
            name: 'Location',
            subMenu: [
                {
                    name: 'Premume Network',
                    icon: MdNetworkCheck,
                    url: '/'
                },
                {
                    name: 'Exceptional client service',
                    icon: IoDiamondOutline,
                    url: '/'
                },
                {
                    name: 'Built-in DDoS protection',
                    icon: MdOutlineSecurity,
                    url: ''
                },
                {
                    name: 'Latest hardware',
                    icon: GrStorage,
                    url: '/'
                }
            ]
        },
        {
            name: 'Use Cases',
            subMenu: [
                {
                    name: 'Premume Network',
                    icon: MdNetworkCheck,
                    url: '/'
                },
                {
                    name: 'Exceptional client service',
                    icon: IoDiamondOutline,
                    url: '/'
                },
                {
                    name: 'Built-in DDoS protection',
                    icon: MdOutlineSecurity,
                    url: ''
                },
                {
                    name: 'Latest hardware',
                    icon: GrStorage,
                    url: '/'
                }
            ]
        },
        {
            name: 'Pricing',
            subMenu: [
                {
                    name: 'Premume Network',
                    icon: MdNetworkCheck,
                    url: '/'
                },
                {
                    name: 'Exceptional client service',
                    icon: IoDiamondOutline,
                    url: '/'
                },
                {
                    name: 'Built-in DDoS protection',
                    icon: MdOutlineSecurity,
                    url: ''
                },
                {
                    name: 'Latest hardware',
                    icon: GrStorage,
                    url: '/'
                }
            ]
        }, {
            name: 'Company',
            subMenu: [
                {
                    name: 'Premume Network',
                    icon: MdNetworkCheck,
                    url: '/'
                },
                {
                    name: 'Exceptional client service',
                    icon: IoDiamondOutline,
                    url: '/'
                },
                {
                    name: 'Built-in DDoS protection',
                    icon: MdOutlineSecurity,
                    url: ''
                },
                {
                    name: 'Latest hardware',
                    icon: GrStorage,
                    url: '/'
                }
            ]
        }
    ]



    return (
        <div className='w-full flex justify-between items-center py-6 container mx-auto'>
            <div className="flex justify-between items-center gap-x-10">
                <div className='w-[162px] h-[52px] cursor-pointer' >
                    <Image src="/images/logo.png" alt="logo" width={162} height={52} />
                </div>
                <div className='flex items-center h-full gap-x-10 ml-10'>
                    {
                        menus.map(item => <MenuItem key={item.name} {...item} />)
                    }
                </div>
            </div>
            <div>
                <button className='bg-primary text-white px-8 py-3 rounded-lg font-semibold'>Get Started</button>
                

            </div>
        </div>
    );
};




const MenuItem = ({ name, subMenu }) => {
    const [show, setShow] = useState(false)

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


    return (
        <div className="relative group">
            <div
                onMouseOver={handleShow}
                onMouseLeave={handleRemove}
                className="flex items-end gap-x-1 cursor-pointer text-secondary transition hover:text-white "

            >
                <span>{name}</span>
                <MdKeyboardArrowDown size={23} className={debounceValue?`rotate-1 transition-all duration-200`:'-rotate-90 transition-all duration-200'} />
            </div>
            <div
                onMouseOver={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
                className={debounceValue ? `absolute top-12 left-0 min-w-[340px] z-10 border-[#1f6867] border-[0.1px] h-auto visible rounded-lg overflow-hidden`
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

const SubMenu = ({ name, icon: Icon, url, index, length }) => {
    return (
        <div
            onClick={() => alert(name)}
            className={index !== length - 1 ?
                `w-full px-10 py-6 bg-[#223D3C] border-b-[0.1px] border-gray-600 flex gap-x-4 cursor-pointer transition hover:bg-[#1F302E] hover:border-b-0 select-none`
                :
                `w-full px-10 py-6 bg-[#223D3C] border-b-0 flex gap-x-4 cursor-pointer hover:bg-[#1F302E]  select-none`}>
            <Icon size={30} color={'#00CFCB'} />
            <span className="text-md"> {name}</span>
        </div>
    )
}


export default MenuBar;