import React from 'react';
import Hero from './components/Hero';
import DedicatedServer from './components/DedicatedServer';
import Contents from './components/Contents';
import DedicatedManager from './components/DedicatedManager';
import UseCaseTestimonial from './components/UseCaseTestimonial';
import Hardware from './components/Hardware';

const page = () => {
    return (
        <>
        <Hero/>
        <DedicatedServer/>
        <Contents/>
        <DedicatedManager/>
        <UseCaseTestimonial/>
        <Hardware/>
        </>
    );
};

export default page;