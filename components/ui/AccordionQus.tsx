'use client'
import React from 'react';
import { AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface AccordionQusProps {
    question: string;
    answer: string
}

const AccordionQus:React.FC<AccordionQusProps> = ({question,answer}) => {
    
    return (
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className='w-full flex items-center justify-between my-8'>
                        <h2 className='text-lg select-none text-white font-semibold'>{question}</h2>
                        <MdOutlineKeyboardArrowRight size={35} fill='#999'/>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p className='text-secondary pr-4'>{answer}</p>
            </AccordionItemPanel>
        </AccordionItem>
    );
};

export default AccordionQus;