import React from 'react';
import './pageLoading.css'

const PageLoading = () => {
    return (
        <div className='container mx-auto w-full min-h-[50vh] flex items-center justify-center'>

            <div className='flex flex-row gap-x-2 items-center'>
                <span className='loader'></span>
                <h1 className='text-4xl text-center'>Loading...</h1>
            </div>
        </div>

    );
};

export default PageLoading;