import Hero from "@/components/Hero";
import ServiceSection from '@/app/(home)/components/ServiceSection'
import HardwareSection from '@/app/(home)/components/HardwareSection'
import NetworkSection from '@/app/(home)/components/NetworkSection'
import TrustedClients from "@/components/share/TrustedClients";
import UseCase from "./components/UseCase";
import Testimonials from "./components/Testimonials";
import DedicatedServer from "./components/DedicatedServer";


const Page = () => {
    return (
        <>
            <Hero/>
            <HardwareSection/>
            <NetworkSection />
            <ServiceSection />
            <TrustedClients/>
            <UseCase/>
            <Testimonials />
            <DedicatedServer/>
        </>
    );
};

export default Page;