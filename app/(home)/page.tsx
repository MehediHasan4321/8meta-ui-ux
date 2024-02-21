'use client'
import Hero from "@/components/pages/home/Hero";
import TrustedClients from "@/components/share/TrustedClients";
import HardwareSection from '@/components/pages/home/HardwareSection'
import NetworkSection from '@/components/pages/home/NetworkSection'
import ServiceSection from '@/components/pages/home/ServiceSection'
import UseCase from "@/components/pages/home/UseCase";
import DedicatedServer from "@/components/pages/home/DedicatedServer";
import Testimonials from '@/components/pages/home/Testimonials'
import PageLoading from "@/components/share/PageLoading";
import PageError from "@/components/share/PageError";
const Page = () => {
    return (
        <>
            <Hero/>
            <HardwareSection />
            <NetworkSection />
            <ServiceSection />
            <TrustedClients length={4}/>
            <UseCase/>
            <Testimonials/>
            <DedicatedServer/>
        </>
    );
};

export default Page;