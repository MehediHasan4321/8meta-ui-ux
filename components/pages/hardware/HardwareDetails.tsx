'use client'

import Container from '@/components/share/Container';
import React, { useMemo, useState } from 'react';
import HardwareName from './HardwareName';
import { hardwareOptions, hardwares } from '@/constants';
import Image from 'next/image';
import ActiveHardwareDetails from './ActiveHardwareDetails';
import Options from './Options';
import { objToArr } from '@/utils';



const HardwareDetails = () => {
    const [acitveHardware, setActiveHardware] = useState<string>(hardwares[0].hardwareName)

    const activeHardwareDetails = useMemo(() => {
        return hardwares.find(item => item.hardwareName === acitveHardware)
    }, [acitveHardware])

    const hardwareImage = useMemo(() => {
        return activeHardwareDetails?.hardwareImg ? activeHardwareDetails.hardwareImg : '/images/placeholder.jpg'
    }, [activeHardwareDetails?.hardwareImg])

    const arr = objToArr(hardwareOptions)



    return (
        <Container className='mt-[97px]'>
            <div className='grid grid-cols-12 gap-x-6'>
                <div className='hidden md:flex col-span-3 flex-col gap-y-4  pl-4'>
                    <p className='text-lg text-white'>Builds per CPU</p>
                    <div className='flex flex-col gap-y-3'>
                        {
                            hardwares.map(item => <HardwareName key={item.hardwareName} name={item.hardwareName} tag={item.tag === 'NEW' ? 'NEW' : ''} active={item.hardwareName === acitveHardware} onClick={(name => setActiveHardware(name))} />)
                        }
                    </div>
                </div>

                {/* Only visible when it's mobile devices */}

                <form className='col-span-12 m-5  md:hidden '>
                    <select
                        className=' w-full px-4 py-3 rounded-md bg-blackAcent border-[1px] border-borderColor '
                        id='hardwareName'
                        value={acitveHardware}
                        onChange={e => setActiveHardware(e.target.value)}
                    >
                        {
                            hardwares.map(item => <option
                                key={item.hardwareName}
                                value={item.hardwareName}
                                className={item.hardwareName === acitveHardware?'text-primary':'text-white'}
                                
                            >
                                {item.hardwareName}
                            </option>)
                        }
                    </select>
                </form>

                <div className='col-span-12 md:col-span-9'>
                    <div className='w-full flex gap-x-4 items-center'>
                        <div className='w-full px-3 md:px-0'>
                            <ActiveHardwareDetails activeHardwareDetails={activeHardwareDetails} />
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


