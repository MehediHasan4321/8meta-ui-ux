'use client'

import Container from '@/components/share/Container';
import React, { useMemo, useState } from 'react';
import HardwareName from './HardwareName';
import { hardwareOptions, hardwares } from '@/constants';
import Image from 'next/image';
import ActiveHardwareDetails from './ActiveHardwareDetails';
import Options from './Options';



const HardwareDetails = () => {
    const [acitveHardware, setActiveHardware] = useState<string>(hardwares[0].hardwareName)

    const activeHardwareDetails = useMemo(() => {
        return hardwares.find(item => item.hardwareName === acitveHardware)
    }, [acitveHardware])

    const hardwareImage = useMemo(() => {
        return activeHardwareDetails?.hardwareImg ? activeHardwareDetails.hardwareImg : '/images/placeholder.jpg'
    }, [activeHardwareDetails?.hardwareImg])

    const arr = Object.keys(hardwareOptions)



    return (
        <Container className='mt-[97px]'>
            <div className='grid grid-cols-12 gap-x-6'>
                <div className='col-span-3  flex flex-col gap-y-4 bg-blackAcent pl-4'>
                    <p className='text-lg text-white'>Builds per CPU</p>
                    <div className='flex flex-col gap-y-3'>
                        {
                            hardwares.map(item => <HardwareName key={item.hardwareName} name={item.hardwareName} tag={item.tag === 'NEW' ? 'NEW' : ''} active={item.hardwareName === acitveHardware} onClick={(name => setActiveHardware(name))} />)
                        }
                    </div>
                </div>

                <div className='col-span-9'>
                    <div className='w-full flex gap-x-4'>
                        <div className='w-3/5'>
                            <ActiveHardwareDetails activeHardwareDetails={activeHardwareDetails} />
                        </div>

                        <div className='w-2/5 bg-blackAcent min-h-[30vh] relative'>
                            <Image src={'/images/processor.png'} width={600} height={481} alt={acitveHardware} />
                        </div>
                    </div>

                    {
                        arr.map(item => <Options 
                            key={item}

                            //@ts-ignore
                            option={hardwareOptions[item]} />)
                    }

                </div>
            </div>
        </Container>
    );
};

export default HardwareDetails;


