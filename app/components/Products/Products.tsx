import React from 'react'
import Link from 'next/link'
import { productsImgContents } from '@/app/fixtures/ProductsContent'
import ReusableImage from '../ReusableImage'

const LatestUpdates = () => {
  return (
    <>
     <section className='wrapper px-6 mx-auto'>
          <div className=' border-b border-t border-white'>
            <div className="bg-black flex flex-col md:flex-row items-start md:justify-between pt-6 pb-12">
                <div>
                    <h1 className=" text-3xl sm:text-4xl font-sourceSansProFont font-normal text-white">
                       Products
                    </h1>
                 </div>

               <div className='md:w-1/2'>
                    <p className='text-xl mb-7 sm:text-2xl text-white'>
                       Our API platform offers our latest models and guides for safety best practices.
                    </p>

                    <Link href='' className='text-xl text-white underline decoration-1 underline-offset-4 cursor-pointer transition-all  duration-300 hover:decoration-white/40'> 
                        Explore our products
                    </Link>
                </div>
            </div>
            
            <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-3 lg:grid-cols-4 pb-24 cursor-pointer -ms-2.5 -me-2.5">
                {productsImgContents.map((image) => (
                <ReusableImage key={image.id} imgSrc={image.src} text={image.text} />
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default LatestUpdates