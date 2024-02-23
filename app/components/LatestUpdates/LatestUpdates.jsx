import React from 'react'
import Link from 'next/link'
import { latestUpdatesContentImgs } from '@/app/fixtures/LatestUpdatesContent'
import ReusableImage from '../ReusableImage'

const LatestUpdates = () => {
  return (
    <>
     <section className='wrapper px-6 mx-auto'>
          <div className=' border-b border-white'>
            <div className="bg-black flex flex-col md:flex-row items-start md:items-center md:justify-between pt-6 pb-12">
                <h1 className=" text-3xl sm:text-4xl font-sourceSansProFont font-normal text-white">
                  Latest updates
                </h1>

                <Link
                  href=""
                  className="pl-6 font-sourceSansProFont text-xl text-white underline decoration-1 underline-offset-4 cursor-pointer transition-all duration-300 hover:decoration-white/40"
                >
                    View all updates
                </Link>
            </div>
            
            <div className="bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-3 lg:grid-cols-4 pb-24 cursor-pointer -ms-2.5 -me-2.5">
                {latestUpdatesContentImgs.map((image) => (
                <ReusableImage key={image.id} imgSrc={image.src} text={image.text} />
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default LatestUpdates