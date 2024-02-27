import React from 'react';

interface MemoryProps {
    memory: string;
    price: number,
    onClick: (memory:string,price:number) => void;
    active?: boolean
}

const Memory: React.FC<MemoryProps> = ({ memory, price, active , onClick }) => {
    return (
        <button
            onClick={() => onClick(memory, price)}
            className={active ?
                'w-full bg-[#0D1817] rounded-md text-primaryLight border-[1px] border-borderColor px-4 py-[10px]' :
                'w-full bg-[#0D1817] rounded-md text-white px-4 py-[10px]'}
        >
            {memory}
        </button>
    );
};

export default Memory;