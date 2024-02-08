import ServerClient from '@/app/(home)/components/ServerClient';
import { Clients } from '@/utils';
import React from 'react';

const TrustedClients = () => {

    return (
        <div className='container mx-auto my-[100px] md:my-[177px]'>
            <div className='w-full flex flex-row items-center justify-center gap-x-5'>
                <div>Trausted :</div>
                <div className='w-9/12 flex flex-row items-center justify-around gap-x-4'>
                    {
                        Clients.map((client,index)=><ServerClient key={index} src={client.src}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TrustedClients;