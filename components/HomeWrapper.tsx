
import React from 'react';
import MenuBar from '@/components/MenuBar'
import ContactBar from './ContactBar';

interface HomeWrapperProps{
    children:React.ReactNode
}


const HomeWrapper:React.FC<HomeWrapperProps> = ({children}) => {
    return (
        <div>
            <header>
                <ContactBar/>
                <MenuBar/>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default HomeWrapper;