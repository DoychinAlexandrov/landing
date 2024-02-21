'use client'

import React from 'react'
import Link from 'next/link'
import { navItems } from '@/app/fixtures/navItems'
import { useState } from 'react';
import {useAutoAnimate} from "@formkit/auto-animate/react"
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
}

const MobileNav = ({closeSideMenu} :  { closeSideMenu: () => void}) => {
    
  return (
    <div className='fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 xl:hidden'>
        <div className='w-full md:w-[350px] h-full bg-black px-4 py-4'>
            <div className='flex justify-end mb-20'>
                <span className='cursor-pointer text-xl text-white' onClick={closeSideMenu}>Close</span>
            </div>

             <ul className='flex flex-col text-base gap-2 transition-all border-t border-white border-solid'>
                {navItems.map((data,indx) =>  
                <SingleNavItem
                    key={indx}
                    label={data.label}
                    link={data.link}
                >
                    {data.children}
                </SingleNavItem>
                 )}
            </ul>

             <div className='flex flex-col'>
                <Link href="#" className='flex py-2.5 text-lg justify-between items-center text-white border-b border-white border-solid'>
                    <span>Log in</span>
                  
                    <MdArrowOutward className='text-lg text-white'/>
                </Link>

                <Link href="#" className='flex py-2.5 text-lg justify-between items-center text-white border-b border-white border-solid'>
                   <span>Try ChatGPT</span> 

                    <MdArrowOutward className='text-lg text-white'/>
                </Link>
            </div>

            <div className='relative mt-32'>
                <form action="">
                    <label htmlFor='search' className='hidden'>Search</label>

                    <input type="text" name='search' id='search' placeholder='Search for anything..' className='bg-black p-2 rounded text-neutral-500 border border-neutral-700 w-full' />

                    <CiSearch className='absolute top-0 right-0 mt-3.5 mr-4 text-white'></CiSearch>
                </form>
            </div>
        </div>
    </div>
  )
  
  function SingleNavItem(data: NavItem) {
    const [animationParent] = useAutoAnimate()
    const [isItemOpen, setItem] = useState(false)

    function toggleItem(){
        return setItem(!isItemOpen)
    }

      return (
           <Link 
             ref={animationParent}
             onClick={toggleItem}
             href={data.link ?? "#"} 
             className='relative py-1 transition-all text-lg border-b border-white border-solid text-white'
           >
            <li className='flex gap-2 justify-between items-center'>
                <span>{data.label}</span>
               {!data.children ? (
                    <FaArrowRightLong className={`text-sm transition-all text-white`} />
                ) : (
                data.children && isItemOpen ? (
                    <FiMinus className={`text-sm transition-all text-white`}/>
                ) : (
                    <FaPlus className={`text-sm transition-all text-white` }/>
                )
                )}
            </li>

            {/* dropdown */}
            {isItemOpen && data.children && (
            <div className='w-full flex-col py-3 transition-all'>
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
        </Link>
      )
  }
}




export default MobileNav
