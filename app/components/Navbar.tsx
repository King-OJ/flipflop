"use client"

import { HiMenu } from 'react-icons/hi'

interface Navbarprops {
    toggleNavbar: ()=>void
}

const Navbar: React.FC <Navbarprops> = ({ toggleNavbar }) => {
    return ( 
    <nav className="page w-full h-24 bg-[#6C82E3] bg-opacity-10 border border-b-2">
        <div className="h-full flex justify-between items-center py-6">
            <button onClick={toggleNavbar} className="hover:opacity-80">
                <HiMenu size={26}/>
            </button>
            
            <h3>Jobs Feed</h3>
            
            <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                <div className="font-semibold text-xs sm:text-sm">Signed in as:</div>
                <button className="px-3 py-[1px] text-sm md:text-base bg-[#3357AE] rounded-md text-white font-semibold hover:bg-opacity-70 transition">User</button>
            </div>
        </div>
    </nav>
    );
}
 
export default Navbar;