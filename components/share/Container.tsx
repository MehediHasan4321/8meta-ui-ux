import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps{
    children:React.ReactNode;
    className?:string
}

const Container:React.FC<ContainerProps> = ({children,className}) => {
    return (
        <div className={twMerge(`container mx-auto`,className)}>
            {children}
        </div>
    );
};

export default Container;