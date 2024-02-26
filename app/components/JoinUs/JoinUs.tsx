import React from 'react'
import Link from 'next/link'

const JoinUs = () => {
  return (
    <>
        <div className='wrapper px-4 text-white'>
            <div className='border-b border-solid border-white'>
                 <h2 className='text-5xl md:text-6xl mb-28'>Join us in shaping the future of technology.</h2>

                   <Link href='' className='text-3xl w-full text-center border border-solid border-white rounded block py-4 hover:text-black hover:bg-white transition-all duration-300'>
                        View Careers
                    </Link>
                </div>
        </div>
    </>
  )
}

export default JoinUs