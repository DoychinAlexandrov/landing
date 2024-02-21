import React from 'react'
import Link from 'next/link'

const Intro = () => {
  return (
   <>
     <section className='wrapper bg-black grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-8 md:place-items-baseline  xl:grid-cols-3 w-full text-center py-12 px-6 text-white font-sourceSansProFont'>
           <div className="flex flex-col space-y-2">
                <h2 className="text-2xl sm:text-3xl xl:text-3xl text-start cursor-pointer mb-2">
                     Pioneering research on the path to AGI
                </h2>

                <Link href={'#'} className="mr-auto underline hover:no-underline underline-offset-4">
                        Learn about our research
                </Link>
            </div>

            <div className="flex flex-col space-y-2">
                 <h2 className="text-2xl sm:text-3xl xl:text-3xl text-start cursor-pointer mb-2">
                     Transforming work and creativity with AI
                 </h2>
                        
                <Link href={'#'} className="mr-auto underline hover:no-underline underline-offset-4">
                    Explore our products
                </Link>
            </div>

             <div className="flex flex-col space-y-2">
                 <h2 className="text-2xl sm:text-3xl xl:text-3xl text-start cursor-pointer mb-2">
                      Join us in shaping the future of technology
                 </h2>

                <Link href={'#'} className="mr-auto underline hover:no-underline underline-offset-4">
                    View careers
                </Link>
            </div>
        </section>
    </>
  )
}

export default Intro