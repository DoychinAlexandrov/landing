'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/img/logo.svg'
import {socialMedias} from '../../fixtures/SocialMedia'
import { FaArrowUp } from "react-icons/fa6";
import { footerNavItems1,footerNavItems2,footerNavItems3,footerNavItems4 } from '../../fixtures/footerNavitems'

const Footer = () => {
    const handleScrollTop = () => {
        window.scrollTo(0,0)
    }

  return (
    <div className='wrapper px-4'>
        <footer className='pt-40'>
            <div className='pb-40 border-b border-solid border-white'>
                <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-y-8 md:gap-2 text-white'>
                    <div className='mb-10 col-span-2 md:col-span-6 xl:col-span-2'>
                        <Link href=''>
                           <Image src={Logo} alt='logo'/> 
                        </Link>
                    </div>

                    <div>
                        {footerNavItems1.map((item, index) => (
                            <div key={index}>
                                <h3 className='text-lg font-bold'>{item.label}</h3>

                                <ul className='text-lg'>
                                    {item.children && item.children.map((childItem, childIndex) => (
                                        <li key={childIndex} className='line'>
                                            <Link href={childItem.link ?? ''}>{childItem.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div>
                        {footerNavItems2.map((item, index) => (
                            <div key={index}>
                                <h3 className='text-lg font-bold'>{item.label}</h3>

                                <ul className='text-lg'>
                                    {item.children && item.children.map((childItem, childIndex) => (
                                        <li key={childIndex} className='line'>
                                            <Link href={childItem.link ?? ''}>{childItem.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div>
                        {footerNavItems3.map((item, index) => (
                            <div key={index}>
                                <h3 className='text-lg font-bold'>{item.label}</h3>

                                <ul className='text-lg'>
                                    {item.children && item.children.map((childItem, childIndex) => (
                                        <li key={childIndex} className='line'>
                                            <Link href={childItem.link ?? ''}>{childItem.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div>
                        {footerNavItems4.map((item, index) => (
                            <div key={index}>
                                <h3 className='text-lg font-bold'>{item.label}</h3>

                                <ul className='text-lg'>
                                    {item.children && item.children.map((childItem, childIndex) => (
                                        <li key={childIndex} className='line'>
                                            <Link href={childItem.link ?? ''}>{childItem.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
             </div>

             <div className='text-white flex pt-2 pb-20 relative'>
                <div className='basis-1/2 md:basis-1/3'>
                    <span className='text-lg font-bold'>OpenAI © 2015-2024</span>

                    <ul className='text-lg'>
                        <li className='hover:underline hover:underline-offset-2 hover:decoration-1 cursor-pointer'>
                            <Link href=''>
                                Terms & policies
                            </Link>
                        </li>

                        <li className='hover:underline hover:underline-offset-2 hover:decoration-1 cursor-pointer'>
                            <Link href=''>
                                Privacy policy
                            </Link>
                        </li>

                        <li className='hover:underline hover:underline-offset-2 hover:decoration-1 cursor-pointer'>
                            <Link href=''>
                                Brand guidelines
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='basis-1/2 md:basis-2/3'>
                    <ul className='block md:flex gap-6 text-lg'>
                        {socialMedias.map((data) => (
                        <li key={data.id} className='hover:underline hover:underline-offset-2 hover:decoration-1'>
                            <a href={data.url} target="_blank" rel="noopener noreferrer">
                            {data.name}
                            </a>
                        </li>
                        ))}
                    </ul>

                    <button onClick={handleScrollTop} className='flex items-center text-lg mt-14 absolute md:relative left-0 bottom-0 hover:underline hover:underline-offset-2 hover:decoration-1 cursor-pointer'>
                        Back to top

                        <FaArrowUp className='text-sm pl-1'/>
                    </button>
                 </div>
             </div>
        </footer>

    </div>
  )
}

export default Footer