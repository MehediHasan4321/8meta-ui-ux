import React from 'react';
import Hero from './components/Hero';
import DedicatedServer from './components/DedicatedServer';
import Contents from './components/Contents';
import DedicatedManager from './components/DedicatedManager';

const page = () => {
    return (
        <>
        <Hero/>
        <DedicatedServer/>
        <Contents/>
        <DedicatedManager/>
        </>
    );
};

export default page;