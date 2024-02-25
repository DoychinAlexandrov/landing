import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import bgImage from '../../../public/img/image_bg_thirteen.webp';

const Careers = () => {
  return (
    <>  
        <div className='wrapper bg-black text-white mb-24 pb-40'>
            <div className='flex flex-col px-6 mb-20 mt-4 md:justify-between md:flex-row  '>
                <div className='mb-6 md:w-1/2'>
                    <h2 className='text-3xl xl:text-5xl font-sourceSansProFont'>Careers at OpenAI</h2>
                </div>

                <div className='md:w-1/2'>
                    <p className='text-xl mb-7 sm:text-2xl'>
                        Developing safe and beneficial AI requires people from a wide range of disciplines and backgrounds.
                    </p>

                    <Link href='' className='text-xl text-white underline decoration-1 underline-offset-4 cursor-pointer transition-all  duration-300 hover:decoration-white/40'> 
                        View careers
                    </Link>
                </div>
            </div>

              <Image src={bgImage}  alt="Image" className="w-full object-cover"/>
        </div>
    </>
  )
}

export default Careers