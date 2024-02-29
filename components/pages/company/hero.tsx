'use client'
import Container from "@/components/share/Container"
import { Clients } from "@/constants"
import Image from "next/image"
import ServerClient from "../home/ServerClient"

const Hero = () => {
    return (
        
        <Container className="min-h-[70vh] w-full flex flex-col -z-10  md:-mt-32 lg:-mt-10 lg:bg-companyBannerImg bg-right-top bg-no-repeat ">
            <div className="w-full h-full flex ">
                <div className="h-full w-full lg:w-3/5 flex flex-col gap-y-5 justify-center items-center">
                    <div>
                        <div className='text-center lg:text-left text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl space-y-2 font-semibold text-white'>
                            <h1>Cutting-edge infrastructure</h1>
                            <h1> global coverage and superb</h1>
                            <h1>service. <span className="text-primary"> That’s 8 Meta.</span></h1>
                        </div>
                        <div className=" w-full px-4 lg:px-0 text-center md:text-justify lg:text-left xl:w-5/6 mt-10 text-lg text-secondary">
                            <p>We specialize in providing high-bandwidth dedicated servers with unparalleled connectivity. Backed by a robust network, abundant server options, and a customer-first approach, we’re here to cater you reliable service you can truly count on.</p>
                        </div>
                    </div>

                </div>
                {/* <div className="w-1/2 h-full relative">
                    <Image src={'/images/company/company-bitmap2.png'} className="object-cover" fill alt="companybitmap" />
                </div> */}
            </div>
            <div className='w-full flex flex-col md:flex-row  justify-around gap-x-5 mt-5 md:-mt-20'>
                <div className='text-xl md:text-md mb-5 md:mb-0 font-semibold'>Trausted :</div>
                <div className='w-full md:w-9/12 flex flex-row items-center justify-around flex-wrap gap-4'>
                    {
                        Clients.map((client, index) => <ServerClient key={index} src={client.src} />)
                    }
                </div>
            </div>
        </Container>

    )
}

export default Hero



