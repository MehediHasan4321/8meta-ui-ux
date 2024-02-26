import React from 'react';
import SectionDivider from '@/components/share/SectionDivider';
import SectionPara from '@/components/share/SectionPara';
import Image from 'next/image';

const Content = () => {
    return (
        <SectionDivider>
            <h4 className='text-primary text-start text-lg uppercase tracking-[5px] '>WHY CHOOSE 8meta</h4>
            <div className='w-full flex flex-col md:flex-row gap-y-6 items-center justify-between mt-16'>
                <div>
                    <Bitmap src='/images/hardwares/bitmap1.png'>
                        <Heading heading='Reliable Hardware,' />
                        <Heading heading='Always-on Support' />
                        <SectionPara className='text-sm text-justify'>
                            8Meta servers are equipped with tried-and tested hardware.
                            In the rare event of a hardware failure,
                            the faulty component is replaced within 120 minutes.
                        </SectionPara>
                    </Bitmap>
                </div>


                <div>
                    <Bitmap src='/images/hardwares/bitmap2.png'>
                        <Heading heading='Reliable Hardware,' />
                        <Heading heading='Always-on Support' />
                        <SectionPara className='text-sm text-justify'>
                            With our month-to-month billing, numerous hardware options and flexible bandwidth plans, you can scale up (and down) to match your current workload requirements.
                        </SectionPara>
                    </Bitmap>
                </div>
            </div>

        </SectionDivider>

    );
};


interface BitmapProps {
    src: string;
    children: React.ReactNode
}

const Bitmap: React.FC<BitmapProps> = ({ src, children }) => {
    return (
        <div className='w-full flex flex-col gap-y-[45px]'>
            <div className='w-[600px] h-[420px] overflow-hidden rounded-2xl relative'>
                <Image src={src} fill className='w-full h-full' alt='bitmap' />
            </div>
            <div className='flex flex-col gap-y-3'>
                {children}
            </div>
        </div>
    )
}

interface HeadingProsp {
    heading: string,

}
const Heading: React.FC<HeadingProsp> = ({ heading }) => {
    return (
        <div className='text-4xl font-semibold  '>
            {heading}
        </div>
    )
}



export default Content;