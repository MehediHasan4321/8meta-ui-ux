'use client'
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import MobileMenuItem from "./MobileMenu";
import MenuItem from "./MenuItem";
import Button from "@/components/ui/Button";
import CartMenu from "./CartMenu";
import { useRouter } from "next/navigation";
import { menus } from "@/constants";



const MenuBar = () => {
        const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)
        const router = useRouter()



    const lastMenu = menus.length - 1




    return (
        <div className='w-full flex justify-between items-center py-6 container mx-auto px-2 relative'>
            <div className="flex justify-between items-center gap-x-10">
                <div onClick={()=>router.push('/')} className='w-[90px] lg:w-[120px] xl:w-[145px] 2xl:w-[162px] h-auto md:h-[52px] md:pt-2 lg:mt-0 cursor-pointer' >
                    <Image src="/images/logo.png" alt="logo" width={162} height={52} />
                </div>
                <div className='hidden md:flex items-center h-full md:gap-x-3 lg:gap-x-7 xl:gap-x-8 2xl:gap-10 md:ml-7 xl:ml-8 2xl:ml-10 '>
                    {
                        menus.map((item, index) => <MenuItem key={item.name} {...item} lastMenu={lastMenu} index={index} />)
                    }
                </div>
            </div>
            <div className="hidden md:block">
                <Button className="px-2 md:px-4 lg:px-6">Get Started</Button>
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
                        
                        <Button className="w-full py-2">Get Stated</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default MenuBar;