'use client'

import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';

interface MobailSubMenuProps {
    name: string;
    url?: string;
    icon: IconType;
    index?: number;
    handleRemoveSubMenu:()=>void
}


const MobailSubMenu: React.FC<MobailSubMenuProps> = ({ name, url='/', icon: Icon, handleRemoveSubMenu }) => {
    const router = useRouter()
    return (
        <div
            onClick={()=>{
                handleRemoveSubMenu
                router.push(url)
            }}
            className={`w-full px-2 md:px-4 lg:px-6 xl:px-8 py-4 bg-[#223D3C] border-b-[0.1px] border-gray-600 flex gap-x-4 cursor-pointer transition hover:bg-[#1F302E] hover:border-b-0 select-none`}>
            <Icon size={30} color={'#00CFCB'} />
            <span className="text-md"> {name}</span>
        </div>
    );
};



export default MobailSubMenu;