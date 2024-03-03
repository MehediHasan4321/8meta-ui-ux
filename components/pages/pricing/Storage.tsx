'use client'
import React from 'react';

interface singleStore {
    storage: string,
    price: number
}

interface StorageProps {
    storage: singleStore,
    active?: boolean;
    onClick: (value: singleStore) => void
}


const Storage: React.FC<StorageProps> = ({ storage, onClick, active }) => {
    return (
        <div
            onClick={() => onClick(storage)}
            className={active ? 'w-full border-[1px] text-primaryLight border-borderColor rounded-lg px-3 py-[10px] text-center cursor-pointer text-[12px] xl:text-md' : 'w-full text-white bg-blackAcent text-[12px] xl:text-md rounded-lg px-1 xl:px-3 py-[10px] text-center cursor-pointer'} >
            {storage.storage}
        </div>
    );
};

export default Storage;