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