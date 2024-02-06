import Hero from "@/components/Hero";
import ServiceSection from '@/app/(home)/components/ServiceSection'
import HardwareSection from '@/app/(home)/components/HardwareSection'
import NetworkSection from '@/app/(home)/components/NetworkSection'
const Page = () => {
    return (
        <>
            <Hero/>
            <HardwareSection/>
            <NetworkSection />
            <ServiceSection />
        </>
    );
};

export default Page;