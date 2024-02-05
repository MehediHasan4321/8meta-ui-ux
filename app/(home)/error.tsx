'use client'
import { useRouter } from 'next/router';
import React from 'react';

const error = () => {
    const router = useRouter()
    return (
        <div >
            Error
            <button onClick={()=>router.reload()} className='bg-primary text-white px-6 py-2 rounded-md font-semibold'>Refresh</button>
        </div>
    );
};

export default error;