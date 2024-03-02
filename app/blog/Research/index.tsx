import React from 'react'
import Link from 'next/link'
import { researchImgsContent } from '@/app/fixtures/ResearchContent'
import ReusableImage from '../../components/ReusableImage'

const Research = () => {
  return (
    <>
     <section className='wrapper px-6 mx-auto text-black'>
          <div>
            <div className="flex flex-col md:flex-row items-start md:justify-between pt-6 pb-12">
                <div>
                    <h1 className=" text-3xl sm:text-4xl font-sourceSansProFont font-normal text-black">
                        Research
                    </h1>
                 </div>

               <div className='md:w-1/2'>
                    <Link href='' className='fade-line'> 
                        View all researches
                    </Link>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-3 lg:grid-cols-4 pb-16 cursor-pointer -ms-2.5 -me-2.5">
                {researchImgsContent.map((image) => (
                <ReusableImage key={image.id} imgSrc={image.src} text={image.text}  whiteColor={false}/>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Research