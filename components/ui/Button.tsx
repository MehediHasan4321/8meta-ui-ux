'use client'
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    icon?: IconType,
    disable?: boolean
}

const Button: React.FC<ButtonProps> = ({ children = 'Click Me', className, onClick, icon: Icon }) => {
    return (
        <div className='flex justify-center md:justify-start items-center w-full'>
            <button
                className={twMerge(`w-full px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-primaryLight flex justify-center items-center gap-x-2 `, className)}
                onClick={onClick}
            >
                {children}
                {Icon && <Icon size={20} />}
            </button>
        </div>
    )
}


export default Button;