"use client"
import Image from "next/image";

const Logo = () => {
    return ( <Image
        alt="flipflop logo"
        src='/images/logo.png'
        height={50}
        width={50}
        style={
            {
                width: "auto",
                height: "auto",
                objectFit: "contain"
            }
        }
        className="hidden md:block"
        priority
        /> );
}
 
export default Logo;