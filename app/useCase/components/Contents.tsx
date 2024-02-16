import SectionDivider from '@/components/SectionDivider';
import SectionHeading from '@/components/SectionHeading';
import SectionPara from '@/components/SectionPara';
import React from 'react';

const Contents = () => {
    return (
        <SectionDivider className='w-full flex flex-col md:flex-row md:items-center gap-6 md:justify-around'>
            <div className='w-full mb-5 md:mb-0 flex flex-col gap-y-4 '>
                <SectionHeading>Global 150+ Tbps</SectionHeading>
                <SectionHeading className='text-primary'>Network</SectionHeading>
                <SectionPara>
                    Consistently low latency and zero packet loss are the results of overprovisioned network, real‑time network monitoring, routing adjustments, and the use of hundreds of networks interconnected through DataPacket’s global private backbone.
                </SectionPara>
            </div>
            <div className='w-full mb-5 md:mb-0 flex flex-col gap-y-4 '>
                <SectionHeading>
                    <span className='text-primary'>Unshared</span> Uplink
                </SectionHeading>
                <SectionHeading>
                    Capacity
                </SectionHeading>
                <SectionPara>
                    Each 8 Meta server comes with unshared uplinks ranging from 1×10GE to 2×100GE . Coupled with unmetered bandwidth plans, our infrastructure can handle even the most bandwidth-intensive tasks.
                </SectionPara>
            </div>
        </SectionDivider>
    );
};

export default Contents;