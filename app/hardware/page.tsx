import HardwareDetails from "@/components/pages/hardware/HardwareDetails"
import HardwareProvider from "@/components/pages/hardware/HardwareProvider"
import Hero from "@/components/pages/hardware/Hero"
import Content from "@/components/pages/hardware/content"



const Page = ()=>{
    return(
        <>
        <Hero/>
        <HardwareDetails/>
        <Content/>
        <HardwareProvider />
        </>
    )
}

export default Page