'use client'
import React, { useMemo, useState } from 'react';
import Input from '../ui/Input';
import { FAQs } from '@/constants';
import FAQButton from '../ui/FAQButton';
import { Accordion } from 'react-accessible-accordion';
import { arrToObj } from '@/utils/index'
import AccordionQus from '../ui/AccordionQus';
import SectionDivider from './SectionDivider';
import SectionHeading from './SectionHeading';

const FAQSection = () => {

    const [faqName, setFaqName] = useState<string>(FAQs[0].name)
    const [accordionId,setAccordionId] = useState<any>()

    const accordionQuestion = useMemo(() => {
        const value = arrToObj(FAQs)
        return value[faqName].questions
    }, [faqName])

  

    return (
        <SectionDivider>
            <div className='flex flex-col md:flex-row gap-x-[135px] gap-y-6'>
                <div className='flex flex-col gap-y-4'>
                    <SectionHeading>
                        Frequently Asked
                    </SectionHeading>
                    <SectionHeading>
                        Questions
                    </SectionHeading>
                </div>
                <div className='w-full md:w-3/6'>
                    <Input />
                </div>
            </div>
            <div className='mt-[42px] flex flex-col md:flex-row gap-x-10'>
                <div className='hidden md:flex w-[320px] flex-col  gap-y-6'>
                    {
                        FAQs.map(item => <FAQButton key={item.name} icon={item.icon} name={item.name} active={faqName === item.name} onClick={() => setFaqName(item.name)} />)
                    }
                </div>
                <div className=' flex items-center gap-x-4 overflow-x-auto py-4 md:hidden'>
                    {
                        FAQs.map(item=><FAQButton key={item.name} icon={item.icon} name={item.name} active={faqName === item.name} onClick={() => setFaqName(item.name)} />)
                    }
                </div>
                <div className='w-full md:w-[62%]'>
                    <Accordion
                    onChange={id=>setAccordionId(id[0])}
                    allowZeroExpanded={true}
                    
                    >
                        {
                            accordionQuestion.map((item: { question: string, answer: string }, index: string) => <AccordionQus key={index} {...item} />)
                        }
                    </Accordion>
                </div>
            </div>
        </SectionDivider>
    );
};

export default FAQSection;