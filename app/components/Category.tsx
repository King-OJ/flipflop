"use client"

import { IconType } from "react-icons";

interface CategoryProps {
    title: string
    icon: IconType
    active?: number | null
    index?: number | null
    onClick: ()=>void
}

const Category:React.FC<CategoryProps> = ({onClick, index, active, title, icon:Icon}) => {
    return ( 
    <div 
    onClick={onClick}
    className={`
    flex 
    flex-col 
    items-center
    justify-end 
    p-2 
    gap-2 
    text-white 
    bg-[#3357AE]
    ${index===active ? 'bg-opacity-100':'bg-opacity-70'} 
    hover:cursor-pointer 
    hover:bg-opacity-100 
    transition
    border
    min-w-[100px] 
    border-b-2
    `}
    >
        <Icon size={26} />
        <div className="capitalize text-sm font-semibold text-center">{title}</div>
    </div> );
}
 
export default Category;