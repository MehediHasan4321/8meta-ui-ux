import ServerClient from '@/app/(home)/components/ServerClient';
import { Clients } from '@/constants';
import React from 'react';

const TrustedClients = () => {

    return (
        <div className='container mx-auto my-[100px] md:my-[177px]'>
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-x-5'>
                <div className='text-xl md:text-md mb-5 md:mb-0 font-semibold'>Trausted :</div>
                <div className='w-full md:w-9/12 flex flex-row items-center justify-around flex-wrap gap-4'>
                    {
                        Clients.map((client,index)=><ServerClient key={index} src={client.src}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TrustedClients;