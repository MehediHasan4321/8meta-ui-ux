import React from 'react';

interface SectionParaProps {
    para?: string;
    children?:React.ReactNode
}

const SectionPara: React.FC<SectionParaProps> = ({ para,children }) => {
    return (
        <div className='w-full xl:w-4/6 text-center md:text-left leading-[25px]'>
            <p className='text-secondary text-[12px] lg:text-md 2xl:text-lg '>{para||children}</p>
        </div>
    );
};

export default SectionPara;