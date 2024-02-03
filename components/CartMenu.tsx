import React from 'react';
import { IconType } from 'react-icons';
import { FiAlertCircle } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { MdLockOutline } from "react-icons/md";



const CartMenu = () => {
    return (
        <div className='flex items-center gap-x-4'>
            <CartMenuAction label='FAQ' icon={FiAlertCircle}/>
            <CartMenuAction label='Carts' icon={BsCart}/>
            <CartMenuAction label='Login' icon={MdLockOutline}/>
        </div>
    );
};

interface CartMenuActionProps {
    label: string;
    icon: IconType;
    onClick?: () => void
}

const CartMenuAction: React.FC<CartMenuActionProps> = ({ label, icon: Icon, onClick }) => {
    return (
        <div
            onClick={onClick}
            className='flex items-center gap-x-2 cursor-pointer'>
            <Icon className='text-primary font-semibold' size={18} />
            <p className='text-white text-sm font-md'>{label}</p>
        </div>
    )
}

export default CartMenu;