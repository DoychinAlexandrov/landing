import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";

import HeroImage from "../../../public/img/block-hero.jpg"

const Hero = () => {
  return (
    <div className='bg-black top-20'>
        <div className='wrapper relative  px-5 mx-auto pt-40'>
            <span className='text-xl text-white'>Blog</span>

            <div className='flex text-white mb-20'>
                <div className='basis-1/2'>

                    <h1 className='text-7xl max-w-[30rem] w-full'>Introducing the GPT Store</h1>
                </div>

                <div className='basis-1/2'>
                    <p className='text-2xl mb-12'>
                        We’re launching the GPT Store to help you find useful and popular custom versions of ChatGPT.
                    </p>

                    <button className='border border-solid rounded border-white px-2 hover:bg-white hover:text-black transition-all duration-300'>
                        <Link href='' className='flex items-center text-xl'>
                            Explore GPTs 

                            <MdArrowOutward />
                        </Link>
                    </button>
                </div>
            </div>

            <Image src={HeroImage} alt='hero' width={1194} height={796} className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default Hero