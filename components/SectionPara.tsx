import React from 'react';

interface SectionParaProps {
    para: string
}

const SectionPara: React.FC<SectionParaProps> = ({ para }) => {
    return (
        <div className='w-full xl:w-4/6 text-center md:text-left leading-[25px]'>
            <p className='text-secondary text-[12px] lg:text-md 2xl:text-lg '>{para}</p>
        </div>
    );
};

export default SectionPara;