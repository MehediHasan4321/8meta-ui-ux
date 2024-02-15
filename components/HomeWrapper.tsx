'use client'
import React from 'react';
import MenuBar from '@/components/MenuBar'
import ContactBar from './ContactBar';
import Footer from './footer/Footer';



interface HomeWrapperProps{
    children:React.ReactNode
}


const HomeWrapper:React.FC<HomeWrapperProps> = ({children}) => {
    return (
        <div>
            <header className='md:px-2'>
                <ContactBar/>
                <MenuBar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeWrapper;