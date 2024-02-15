'use client'

import Image from "next/image";
import { MdSecurity } from "react-icons/md";
import FooterMenu from "./FooterMenu";
import {footerSecures} from '@/constants/index'
import FooterContact from "./FooterContact";
const Footer = () => {
    return (
        <div className='container mx-auto mt-[137px]'>
        
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5">
                <FooterMenu footerMent={footerSecures['PRODUCT']} menuName="PRODUCT"/>
                <FooterMenu footerMent={footerSecures['USE CASES']} menuName="USE CASES"/>
                <FooterMenu footerMent={footerSecures['RESOURCES']} menuName="RESOURCES"/>
                <FooterMenu footerMent={footerSecures['COMPANY']} menuName="COMPANY"/>
                <FooterContact menuName="GET IN TOUCH" contact={footerSecures['GET IN TOUCH']}/>
                
            </div>


            <div className='w-full my-10 flex flex-col md:flex-row gap-y-4 items-center justify-between'>
                <div className="flex flex-row gap-x-4 items-center">
                    <PaymentCard src="/images/card/visa.png"/>
                    <PaymentCard src="/images/card/masterCard.png"/>
                    <PaymentCard src="/images/card/americanExpress.png"/>
                    <PaymentCard src="/images/card/discover.png"/>
                </div>
                <div>
                    <div className="flex flex-row items-center gap-x-2">
                        <div className="flex items-center gap-x-2">
                            <MdSecurity size={15} className="text-primary" />
                            <span className="text-primary">Secure</span>
                        </div>
                        <p className="text-sm"> SSL Encreption</p>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row gap-y-4 items-center justify-between py-5">
                <div className="flex flex-row items-center gap-x-6">
                    <p className="text-[12px] text-secondary cursor-pointer hover:text-white">Terms & conditions</p>
                    <p className="text-[12px] text-secondary cursor-pointer hover:text-white">Privacy policy </p>
                    <p className="text-[12px] text-secondary cursor-pointer hover:text-white"> Service level agreement</p>
                </div>
                <div>
                    <p className="text-[10px] text-center md:text-[12px] text-secondary">© 2023 8meta Limited, 123 Coldbath Square, London, United Kingdom. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

interface PaymentCardProps{
    src:string
}

const PaymentCard:React.FC<PaymentCardProps> = ({src})=>{
    return(
        <div>
            <Image className="object-fill" src={src} width={40} height={9} alt="card"/>
        </div>
    )
}

export default Footer;