'use client'
import Link from 'next/link'

interface ButtonProps{
    label: string
    link?: boolean
    href?: any 
    gradient?: boolean
    color?: string
    onClick?: ()=>void
}

const Button: React.FC <ButtonProps> = ({label, gradient, color, link, href, onClick}) => {
    type bgColor = {
        [key: string]: string
    }

    const bgColor: bgColor = {
        cream: 'bg-[#D99712] text-white',
        blue: 'bg-[#3357AE] text-white',
    }

    
    return <>{link ?
                <Link href={href} className={`
                ${gradient ? 'bg-gradient-to-tl from-[#D99712] to-[#3357AE]': ''}
                ${color ? `${bgColor[color]}` : 'bg-[#D99712]'}
                px-5 
                md:py-3
                py-2 
                rounded-full 
                text-base 
                md:text-lg 
                font-semibold 
                tracking-wide 
                hover:shadow-lg 
                hover:bg-opacity-70 
                transition`}>{label}</Link> 
                :
                <button
                onClick={onClick} 
                className={`
                ${gradient ? 'bg-gradient-to-tl from-[#D99712] to-[#3357AE]': ''}
                ${color ? `${bgColor[color]}` : ''}
                px-8 
                md:py-3
                py-2 
                rounded-full 
                text-base 
                md:text-lg 
                font-semibold 
                tracking-wide 
                hover:shadow-lg 
                hover:bg-opacity-70 
                transition`}>{label}</button> }</>
    
}
 
export default Button;
