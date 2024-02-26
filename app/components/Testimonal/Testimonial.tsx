import React from 'react'
import Image from 'next/image'
import imgPortrait from '../../../public/img/image_portrait_alex_w.webp'

const Testimonial = () => {
  return (
    <>
        <div className='wrapper bg-black text-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-4'>
                <div className='md:order-2 mb-8'>
                     <Image src={imgPortrait}  alt="Image" className="w-full object-cover"/>
                </div>

                <div className='md:order-1'>
                    <blockquote className='mb-5 md:mb-10'>
                        <p className = 'text-3xl md:text-5xl'>
                            I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and     broaden the potential solution space.
                      </p>
                    </blockquote>

                    <h4 className='font-bold'>Lilian Weng</h4>

                    <span className='text-md'>Applied AI at OpenAI</span>
                </div>
            </div>
         </div>
    </>
  )
}

export default Testimonial