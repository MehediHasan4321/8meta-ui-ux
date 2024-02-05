'use client'
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge'

interface ButtonProps{
    children:React.ReactNode;
    onClick?:()=>void;
    className?:string;
    icon?:IconType
}

const Button:React.FC<ButtonProps> = ({children='Click Me',className,onClick,icon:Icon})=>{
    return(
        <button
        className={twMerge(`m-2 px-6 py-3 rounded-md bg-primary text-white font-semibold flex justify-center items-center gap-x-2 hover:bg-primary `,className)}
        onClick={onClick}
        >
            <p>{children}</p>
            {Icon&&<Icon size={20}/>}
        </button>
    )
}


export default Button;