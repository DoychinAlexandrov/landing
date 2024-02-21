import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50'></div>
         <video src={require("../../../public/video/paper-planes.mp4")}
                className='w-full h-screen object-cover'
                autoPlay
                loop
                muted
            >
        </video>

        <div className='wrapper relative'>
             <div className='flex flex-col absolute bottom-[4%] pb-5 left-[1rem] xl:left-[15%] text-white'>
                <h1 className='text-4xl mb-16 pr-2.5 md:text-6xl xl:max-w-[850px] w-auto xl:text-7xl'>Introducing Sora: Creating video from text</h1>

                <button className='mr-auto'>
                    <Link href="#" className='text-lg border border-solid border-gray-300 rounded py-1 px-2 hover:bg-white hover:text-black'>
                        Learn more about Sora
                    </Link>
                </button>
            </div>
         </div>
    </div>  
  )
}

export default Hero
