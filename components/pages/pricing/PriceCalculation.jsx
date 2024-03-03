'use client'

import Container from '@/components/share/Container';
import { dataCenters, hardwares, memoryes, storages } from '@/constants';
import React, { useEffect, useMemo, useState } from 'react';
import { GrPowerReset } from 'react-icons/gr';
import CPU from './CPU';
import Memory from './Memory';
import Storage from './Storage';
import DataCenterOption from './DataCenterOption';
import Button from '@/components/ui/Button';

const PriceCalculation = () => {
    const intiState = {
        cpu: { name: '', price: 0 },
        memory: { memory: '', price: 0 },
        storage: { storage: '', price: 0 },
        bandwidth: { bandwith: '', price: 0 },
        dataCenter : {region:'',state:'',price:0}

    }

    const [pricing, setPricing] = useState({ ...intiState })
    const [ssdOrHdd, setSsdOrHdd] = useState('ssd')
    const [usdOrGbp, setUsdOrGbp] = useState('USD')
    const dataCenterArr = Object.keys(dataCenters)
    const [dataCenterName, setDataCenterName] = useState(dataCenterArr[0])
    const [bandwidth, seBanwidth] = useState(100)
    const dataCenterOption = useMemo(() => {

        return dataCenters[dataCenterName]
    }, [dataCenterName])


    

    const storageArr = useMemo(() => {

        return storages[ssdOrHdd]
    }, [ssdOrHdd])



    






    return (
        <Container>
            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-x-5'>
                    <div className='size-4 rounded-full bg-primaryLight' />
                    <h2 className='text-secondary text-sm'>Show <span className='text-white'>in-stock</span> configurations only</h2>
                </div>
                <div className='flex items-center gap-x-2'>
                    <GrPowerReset color='#00D6D0' size={15} />
                    <h3 className='text-secondary text-sm'>Availability updated at <span className='text-primaryLight'>23:26</span></h3>
                </div>
            </div>


            <div className='w-full mt-10 grid grid-cols-12 gap-x-[30px]'>

                <div className='col-span-2'>
                    <div className='text-center text-primaryLight text-lg uppercase mb-[87px]'>
                        CPU
                    </div>
                    <div className='flex flex-col gap-y-[10px]'>
                        {
                            hardwares.map(item => <CPU key={item.id}
                                name={item.hardwareName}
                                cpu={item.hardwareConfig}
                                tag={item.tag}
                                price={item.price}
                                active={item.hardwareName === pricing['cpu'].name}
                                onClick={(data) =>setPricing({...pricing,cpu:data})}
                            />)
                        }
                    </div>
                </div>

                {/* Memory Section */}

                <div className='col-span-1'>
                    <div className='mb-[87px]'>
                        <h3 className='text-lg text-center text-primaryLight'>Memory</h3>
                    </div>
                    <div className='flex flex-col gap-y-3'>
                        {
                            memoryes.map(memory => <Memory
                                key={memory.memory}
                                active={pricing['memory'].memory === memory.memory}
                                {...memory}
                                onClick={(value)=>setPricing({...pricing,memory:{...value}})}
                            />)
                        }
                    </div>
                </div>

                {/* storage Section */}

                <div className='col-span-2'>
                    <div className='flex flex-col items-center mb-[30px]'>
                        <h3 className='text-lg text-primaryLight text-center mb-[21px]'>Storage</h3>
                        <div className='w-[160px] border-[1px] border-borderColor rounded-lg flex flex-row overflow-hidden'>
                            <button onClick={() => setSsdOrHdd('ssd')} className={ssdOrHdd === 'ssd' ? 'bg-primary w-1/2 py-[6px]' : 'bg-blackAcent w-1/2 py-[6px]'}>SSD</button>
                            <button onClick={() => setSsdOrHdd('hdd')} className={ssdOrHdd === 'hdd' ? 'bg-primary w-1/2 py-[6px]' : 'bg-blackAcent w-1/2 py-[6px]'}>HDD</button>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-y-4'>
                        {
                            //@ts-ignore
                            storageArr?.map(item => <Storage
                                key={item.storage}
                                storage={item}
                                active={item.storage === pricing.storage.storage}
                                onClick={(value)=>setPricing({...pricing,storage:{...value}})}
                            />)
                        }
                    </div>

                </div>

                {/* Data Center Section */}
                <div className='col-span-3'>
                    <div className='flex flex-col items-center mb-[30px]'>
                        <h3 className='text-lg text-primaryLight text-center mb-[21px]'>Data Center</h3>

                        <form className='w-full'>

                            <select
                                onChange={(e) => setDataCenterName(e.target.value)}
                                value={dataCenterName}
                                className='w-full bg-blackAcent border-[1px] border-borderColor rounded-lg px-4 outline-none py-[12px] flex flex-row justify-between items-center overflow-hidden'>
                                {
                                    dataCenterArr.map(item => (
                                        <option
                                            key={item}
                                            value={item}
                                            className='w-full bg-blackAcent text-white py-3'
                                        >
                                            {item}
                                        </option>
                                    ))
                                }
                            </select>
                        </form>
                    </div>

                    <div className='w-full flex flex-col gap-y-4'>
                        {
                            //@ts-ignore
                            dataCenterOption.map(option => <DataCenterOption
                                key={option.location}
                                {...option}
                                onClick={location => setPricing({...pricing,dataCenter:{region:dataCenterName,state:location,price:0}})}
                                active={option.location === pricing.location}
                            />)
                        }
                    </div>
                </div>

                {/* Bandwidth section */}
                <div className='col-span-1 flex flex-col items-center'>
                    <div className='flex flex-col items-center gap-y-2'>
                        <div>
                            <h3 className='text-lg text-primaryLight text-center '>Bandwidth</h3>
                            <h5 className='text-secondary text-[12px] text-center'>(unmetered)</h5>
                        </div>
                        <button className='px-3 py-2 bg-primary text-white rounded-lg '> {bandwidth}Mbps</button>
                    </div>
                    <div className='w-2 min-h-[50vh] mt-5 rounded-md bg-neutral-900 relative '>
                        <div className='absolute w-2 bg-gradient-to-b from-neutral-800 to-primaryLight h-[10vh] mt-5 rounded-lg'>
                            <div className='relative w-full h-full'>
                                <div className=' absolute  -left-[5px] bottom-0 size-5 rounded-full bg-primaryLight cursor-pointer' />
                            </div>
                        </div>


                    </div>
                </div>

                <div className=' col-span-3'>
                    <div className='flex flex-col items-center gap-y-5'>
                        <h3 className='text-lg text-center text-primaryLight '>Server Pricing</h3>
                        <div className='w-[160px] border-[1px] border-borderColor rounded-lg flex flex-row overflow-hidden'>
                            <button onClick={() => setUsdOrGbp('USD')} className={usdOrGbp === 'USD' ? 'bg-primary w-1/2 py-[6px]' : 'bg-blackAcent w-1/2 py-[6px]'}>USD</button>
                            <button onClick={() => setUsdOrGbp('GBP')} className={usdOrGbp === 'GBP' ? 'bg-primary w-1/2 py-[6px]' : 'bg-blackAcent w-1/2 py-[6px]'}>GBP</button>
                        </div>
                    </div>
                    <div className='mt-[80px] flex flex-col gap-y-1'>
                        <h1 className='text-5xl font-normal text-primaryLight text-center'>${pricing['bandwidth'].price+pricing['cpu'].price+pricing['memory'].price+pricing['storage'].price}</h1>
                        <h6 className='text-[16px] text-secondary text-center'>per month</h6>
                    </div>
                    <div className='mt-[61px] flex flex-col items-center gap-y-3'>
                        <div>
                            <Button className='w-fit px-[39px]'>Order Now</Button>
                        </div>
                        <h6 className='text-[12px] text-center text-secondary'>(Choose OS & RAID & IPs)</h6>

                    </div>

                    {/* <div className='mt-16'>
                        <input type='range' min={100} max={2000} value={bandwidth} onChange={(e) => seBanwidth(e.target.value)} />
                    </div> */}

                </div>
            </div>
        </Container>
    );
};

export default PriceCalculation;