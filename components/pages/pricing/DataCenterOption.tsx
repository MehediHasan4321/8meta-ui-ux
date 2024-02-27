'use client'

import React from 'react';

interface DataCenterOptionProps {
    location: string;
    status: string,
    onClick: (data: string) => void;
    active?: boolean
}

const DataCenterOption: React.FC<DataCenterOptionProps> = ({ location, status, onClick, active }) => {
    return (
        <div
            onClick={() => onClick(location)}
            className={
                active ?
                    'w-full px-4 py-3 border-[1px] border-borderColor text-primaryLight flex justify-between items-center rounded-lg cursor-pointer'
                    :
                    'w-full px-4 py-3 text-white flex justify-between items-center rounded-lg cursor-pointer bg-neutral-900'}
        >
            <h3>{location}</h3>
            <h4 className={status !== 'On Request' ? 'text-primaryLight text-sm' : 'text-white text-sm'}>{status}</h4>
        </div>
    );
};

export default DataCenterOption;