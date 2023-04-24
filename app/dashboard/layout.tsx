"use client"
import { useState } from "react";
import CategoriesBox from "../components/CategoriesBox";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import { GiSkills, GiClothes, GiShoppingBag, GiFamilyHouse, GiTeacher } from 'react-icons/gi'
import { IoIosConstruct, IoIosPeople } from 'react-icons/io'
import { BsBank2, BsFillWalletFill } from 'react-icons/bs'
import { HiCode } from 'react-icons/hi'
import { FaChair } from 'react-icons/fa'

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";



export default function DashboardLayout(
    {
        children,
      }: {
        children: React.ReactNode
      }
){
    const categories = [
        {
           title: "All jobs" ,
           icon: BsFillWalletFill
        },
        {
           title: "tech jobs" ,
           icon: GiSkills
        },
        {
           title: "construction jobs" ,
           icon: IoIosConstruct
        },
        {
           title: "bank jobs" ,
           icon: BsBank2
        },
        {
           title: "programmers" ,
           icon: HiCode
        },
        {
           title: "fashion designers" ,
           icon: GiClothes
        },
        {
           title: "traders" ,
           icon: GiShoppingBag
        },
        {
           title: "realtors" ,
           icon: GiFamilyHouse
        },
        {
           title: "domestic staff" ,
           icon: IoIosPeople
        },
        {
           title: "furniture jobs" ,
           icon: FaChair
        },
        {
           title: "teachers" ,
           icon: GiTeacher
        },
        {
           title: "realtors" ,
           icon: GiSkills
        },
        {
           title: "domestic staff" ,
           icon: GiSkills
        },
        {
           title: "furniture jobs" ,
           icon: GiSkills
        },
        {
           title: "teachers" ,
           icon: GiSkills
        },

    ]

    const [active, setActive] = useState(0)

    const [sidebar, setSidebar] = useState(false)

    return ( 
        <section className="relative overflow-x-hidden">
            <Navbar toggleNavbar={()=>setSidebar(!sidebar)}/>
            <CategoriesBox>
                <div className="flex gap-3">
                    {categories.map((item, index)=> {
                    
                    return <Category key={index} title={item.title} icon={item.icon} active={active} index={index} onClick={()=>{
                        setActive(index)
                    }} />}
                    )}
                </div>
            </CategoriesBox>

            <div className="w-full relative flex flex-row items-start">
                {/* side menu */}
                <Sidebar showSidebar={sidebar} />
                {/* Content */}
                <section className={` relative left-[16%] transition-all ${sidebar ? '-ml-[16%] w-full' : ' w-[84%]'}`}>{children}</section>
            </div>
            {/* <Footer /> */}
        </section> 
     );
}
 

