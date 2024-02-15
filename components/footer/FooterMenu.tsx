import { FooterMenuItem } from '@/types';
import React from 'react';
import FooterMenuItems from './FooterMenuItems';


interface FooterMenuProp {
    footerMent:FooterMenuItem[],
    menuName:string
}

const FooterMenu:React.FC<FooterMenuProp> = ({footerMent,menuName}) => {
    
    return (
        <div className='w-full flex flex-col justify-start gap-y-5 px-4'>
            <div className='text-md text-secondary font-semibold'>{menuName}</div>
            {
                footerMent.map(menu=><FooterMenuItems key={menu.name} menuItems={menu}/>)
            }
        </div>
    );
};

export default FooterMenu;