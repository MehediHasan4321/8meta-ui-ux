`use client`
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { IconType } from "react-icons";


interface SubMenuProps{
    name:string;
    icon:IconType;
    url:string;
    index:number;
    length?:number
}



const SubMenu:React.FC<SubMenuProps> = ({ name, icon: Icon, url, index, length=0 }) => {
    const router = useRouter()
    const pathName = usePathname()
    

   
    return (
        <div
            onClick={()=>router.push(url)}
            className={index !== length - 1 ?
                `w-full px-2 md:px-4 lg:px-6 xl:px-8 py-6 bg-[#223D3C] border-b-[0.1px] border-gray-600 flex gap-x-4 cursor-pointer transition hover:bg-[#1F302E] hover:border-b-0 select-none`
                :
                `w-full px-2 md:px-4 lg:px-6 xl:px-8 py-6 bg-[#223D3C] border-b-0 flex gap-x-4 cursor-pointer hover:bg-[#1F302E]  select-none`}>
            <Icon size={30} color={'#00CFCB'} />
            <span className="text-md"> {name}</span>
        </div>
    )
}


export  default SubMenu