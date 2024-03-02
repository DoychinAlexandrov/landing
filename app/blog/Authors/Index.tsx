import React from 'react'
import Link from 'next/link'

const Authors = () => {
  return (
    <>
        <section className='wrapper px-6'>
            <div className='border-b border-solid border-black pb-20'>
                <div className='flex flex-wrap'>
                    <div className='basis-1/6'>
                        <h3 className='text-lg font-bold'>Authors</h3>
                    </div>

                    <div>
                        <h3 className='text-lg font-bold'>OpenAI</h3>

                        <Link href='' className='fade-line text-lg'>
                            View all articles
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Authors