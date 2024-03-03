import React from 'react';

interface MemoryProps {
    memory: string;
    price: number,
    onClick: (value:{memory:string,price:number}) => void;
    active?: boolean
}

const Memory: React.FC<MemoryProps> = ({ memory, price, active , onClick }) => {
    return (
        <button
            onClick={() => onClick({memory,price})}
            className={active ?
                'w-full bg-[#0D1817] rounded-md px-[7px] xl:px-4 py-[10px] text-sm xl:text-md border-[1px] border-borderColor text-primary ' :
                'w-full bg-[#0D1817] rounded-md text-white px-2 xl:px-4 py-[10px] text-sm xl:text-md'}
        >
            {memory}
        </button>
    );
};

export default Memory;