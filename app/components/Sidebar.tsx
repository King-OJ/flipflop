"use client"
import Link from "next/link";
import { usePathname} from "next/navigation";


interface SidebarProp {
    showSidebar: boolean
}

const Sidebar:React.FC <SidebarProp> = ({ showSidebar}) => {

    const pathname  = usePathname()

    const links = [
        {
            href: "/dashboard",
            title: "All Jobs"
        },
        {
            href: "/dashboard/give-job",
            title: "Give Job"
        },
        {
            href: "/dashboard/offers",
            title: "Offers"
        },
        {
            href: "/dashboard/chats",
            title: "Chats"
        },
        {
            href: "/dashboard/profile",
            title: "Profile"
        }
    ]

    return ( <aside className={`fixed w-[16%] h-full transition-all ${showSidebar && '-ml-[16%] border border-r-2'}`}>
    <div className=" py-6 bg-white w-full h-full">
        <div className="mt-4 space-y-2">
            {links.map((link, index)=>{ 
            return <Link key={index} href={link.href} className={`${link.href === pathname ? 'text-[#3357AE] bg-neutral-100': 'text-slate-900'} block tracking-wider text-lg font-semibold py-3 hover:bg-neutral-100 cursor-pointer transition`}><span  className={`${link.href === pathname ? 'font-bold':'font-semibold'} pl-10 `}>{link.title}</span></Link>
})}

        </div>
    </div>
</aside> );
}
 
export default Sidebar;