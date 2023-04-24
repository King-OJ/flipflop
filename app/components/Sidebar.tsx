"use client"
import Link from "next/link";

interface SidebarProp {
    showSidebar: boolean
}

const Sidebar:React.FC <SidebarProp> = ({ showSidebar}) => {
    return ( <aside className={`fixed w-[16%] h-full transition-all ${showSidebar && '-ml-[16%]'}`}>
    <div className=" py-6 bg-white w-full h-full">
        <div className="mt-4 space-y-4 text-[#3357AE]">
            <Link href="/dashboard" className="block text-lg font-semibold py-2 hover:bg-neutral-100 cursor-pointer transition "><span  className="pl-10">All jobs</span></Link>
            <Link href="/dashboard/give-job" className="block text-lg font-semibold py-2 hover:bg-neutral-100 cursor-pointer transition "><span  className="pl-10">Give jobs</span></Link>
            <Link href="/dashboard/offers" className="block text-lg font-semibold py-2 hover:bg-neutral-200 cursor-pointer transition "><span  className="pl-10">My Offers</span></Link>
            <Link href="/dashboard/chats" className="block text-lg font-semibold py-2 hover:bg-neutral-200 cursor-pointer transition "><span  className="pl-10">My Chats</span></Link>
            <Link href="/dashboard/profile" className="block text-lg font-semibold py-2 hover:bg-neutral-200 cursor-pointer transition "><span  className="pl-10">My Profile</span></Link>

        </div>
    </div>
</aside> );
}
 
export default Sidebar;