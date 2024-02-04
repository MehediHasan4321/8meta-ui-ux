'use client'

import { MdNetworkCheck } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import Image from 'next/image';
import MenuItem from "@/app/(home)/components/MenuItem";


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

    const lastMenu = menus.length - 1

    return (
        <div className='w-full flex justify-between items-center py-6 container mx-auto px-2'>
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
            <div className=" md:hidden">
                menu bar 
            </div>
        </div>
    );
};




export default MenuBar;