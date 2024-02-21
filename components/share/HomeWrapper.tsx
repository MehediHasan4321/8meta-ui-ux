'use client'
import React from 'react';
import ContactBar from '../header/ContactBar';
import Footer from '../footer/Footer';
import MenuBar from '../header/MenuBar';



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