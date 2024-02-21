'use client'

import React from 'react'
import Logo from '../../../public/img/logo.svg'
import { useState, useEffect } from 'react';

import {IoIosArrowDown} from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { navItems } from '@/app/fixtures/navItems';

import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Nav = () => {
    const [animatationParent] = useAutoAnimate()
    const [color, setColor] = useState('transparent')
    const [bgColor, setBgColor] = useState('transparent')
    const [isSideMenuOpen, setSideMenu] = useState(false)

    useEffect(() => {
        const ChangeColor = () => {
            if(window.scrollY >= 90) {
                setColor("#000")
                setBgColor("#000")
            } else {
                setColor("transparent")
                setBgColor("transparent")
            }
        };
        window.addEventListener('scroll', ChangeColor)
    },[])

    function openSideMenu(){
        setSideMenu(true)
    }

    function closeSideMenu() {
        setSideMenu(false)
    }

  return ( 
    <header style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full text-sm ease-in duration z-10'>
        <div className='max-w-[1520px] m-auto flex justify-between py-5 px-5 items-center'>
        {/* left side */}
        <div ref={animatationParent} className='flex items-center gap-20'>
            {/* logo */}
            <Image src={Logo} alt='logo'/>
            {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
             <ul className='hidden xl:flex items-center gap-4 transition-all'>
                {navItems.map((data,indx) => 
                <Link 
                    key={indx}
                    href={data.link ?? "#"} 
                    className='relative group pr-2 py-3 transition-all text-lg text-white'
                >
                    <li className='flex gap-2 items-center relative pl-2.5'>
                       <span>{data.label}</span>
                       {data.children && (
                         <IoIosArrowDown className='group-hover:rotate-180 duration-300 transition-all'/> 
                       )}
                   
                      {/* dropdown */}
                      {data.children && (
                      <div style={{ backgroundColor: `${bgColor}`}} className='absolute left-0 top-10 px-2.5 flex-col hidden py-3 group-hover:flex transition-all'>
                        {data.children.map((ch,indx) =>
                         <Link 
                            key={indx}
                            href={ch.link ?? "#"} 
                            className='flex cursor-pointer items-center py-1 text-lg'
                            >
                            <span className='whitespace-nowrap'>
                                {ch.label}
                            </span>
                          </Link>
                         )}
                      </div>
                     )}
                     </li>
                </Link>
                 )}
            </ul>
            {/* navitems */}
        </div>

        {/* right side data */}
        <div className='flex items-center gap-8'>
            {/* {CTA} */}
            <div className='hidden xl:flex gap-6 text-white'>
                <Link href="#" className='hidden lg:inline-block text-lg'>
                    Search
                </Link>

                <Link href="#" className='hidden lg:inline-block relative text-lg custom-underline'>
                    Log in
                    <MdArrowOutward className='absolute top-1.5 left-11' />
                </Link>

                <Link href="#" className='hidden lg:inline-block relative text-lg border border-solid border-gray-300 rounded pl-5 pr-8 hover:bg-white hover:text-black'>
                    Try ChatGPT 
                    <MdArrowOutward className='absolute top-1.5 right-4' />
                </Link>
            </div>
                                    
            <h3 className='xl:hidden cursor-pointer text-white text-xl' onClick={openSideMenu}> Menu </h3>
        </div>

        </div>
    </header>
  )
}

export default Nav