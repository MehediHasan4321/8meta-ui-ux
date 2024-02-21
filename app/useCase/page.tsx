import React from 'react';
import Hero from '../../components/pages/useCase/Hero';
import DedicatedServer from '../../components/pages/useCase/DedicatedServer';
import Contents from '../../components/pages/useCase/Contents';
import DedicatedManager from '../../components/pages/useCase/DedicatedManager';
import UseCaseTestimonial from '../../components/pages/useCase/UseCaseTestimonial';
import Hardware from '../../components/pages/useCase/Hardware';
import FAQSection from '@/components/share/FAQSection';


const page = () => {
    return (
        <>
        <Hero/>
        <DedicatedServer/>
        <Contents/>
        <DedicatedManager/>
        <UseCaseTestimonial/>
        <Hardware/>
        <FAQSection/>
        </>
    );
};

export default page;