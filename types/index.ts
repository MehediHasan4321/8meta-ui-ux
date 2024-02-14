import { IconType } from "react-icons";

export interface Submenu{
    name:string;
    icon:IconType;
    url?:string
}

export interface TextPointers{
    higlihtText:string;
    normalText:string
}

export interface useCase {
    name:string;
    desc:string;
    icon:IconType
}

export interface Testimonial{
    id:string;
    name:string;
    avater?:string;
    employeePosition:string;
    review:string,
    logo:string
}


export interface FooterMenuItem {
    name:string,
    url:string | '/',
    
}

export interface FooterContactItem {
   
    mail:string;
    contactNum:string[];
    socialMedia:{title:string,icon:IconType}[]
}