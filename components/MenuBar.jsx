'use client'

import { MdNetworkCheck } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import MobileMenuItem from "./MobileMenuItem";
import MenuItem from "./MenuItem";
import Button from "@/ui/Button";
import CartMenu from "./CartMenu";



const MenuBar = () => {
    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)


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
            subMenu: [],
            url: '/pricing'
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



    const lastMenu = menus.length - 1




    return (
        <div className='w-full flex justify-between items-center py-6 container mx-auto px-2 relative'>
            <div className="flex justify-between items-center gap-x-10">
                <div className='w-[90px] lg:w-[120px] xl:w-[145px] 2xl:w-[162px] h-auto md:h-[52px] md:pt-2 lg:mt-0 cursor-pointer' >
                    <Image src="/images/logo.png" alt="logo" width={162} height={52} />
                </div>
                <div className='hidden md:flex items-center h-full md:gap-x-3 lg:gap-x-7 xl:gap-x-8 2xl:gap-10 md:ml-7 xl:ml-8 2xl:ml-10 '>
                    {
                        menus.map((item, index) => <MenuItem key={item.name} {...item} lastMenu={lastMenu} index={index} />)
                    }
                </div>
            </div>
            <div className="hidden md:block">
                <button className='bg-primary text-white text-[12px] md:px-2 lg:px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 rounded-lg font-semibold'>Get Started</button>
            </div>

            {/* This is mobile menu bar it's only visible when it is in mobile responsive */}
            <div className=" md:hidden">

                {
                    isMenuBarOpen ? <button onClick={() => setIsMenuBarOpen(false)}><ImCross size={25} color="white" /> </button> : <button onClick={() => setIsMenuBarOpen(true)}> <FaBars size={25} color="white" /> </button>
                }


            </div>
            <div className={isMenuBarOpen ?
                `absolute top-16 -translate-x-2 transition ease-in-out duration-300 md:hidden min-w-[250px] min-h-[550px] bg-neutral-900 z-50 opacity-95`
                :
                `absolute top-16  transition duration-75 md:hidden min-w-[250px] min-h-[550px] bg-neutral-900 -translate-x-[358px] z-50`}>
                <div className="relative min-h-[550px]">
                    <div className="w-full h-full flex flex-col gap-y-3 ">
                        {
                            menus.map(menu => <MobileMenuItem key={menu.name} {...menu} />)
                        }
                    </div>
                    <div className="absolute bottom-0 right-0 left-0 flex flex-col items-center justify-center gap-y-2">
                        <div>
                            <CartMenu/>
                        </div>
                        <button className="w-full m-2 py-3 px-5 bg-primary text-white rounded-lg">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default MenuBar;