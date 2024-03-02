import React from 'react'
import Link from 'next/link'
import { MdArrowOutward } from "react-icons/md";

const Main = () => {
  return (
    <section className='wrapper bg-white mt-12 px-6'>
        <div className='border-t border-b border-solid border-black mt-24'>
            <div className='flex flex-wrap mb-24'>
                <div className='basis-1/6'>
                    <span className='text-xl'>January 10, 2024</span>
                </div>

                <div className='basis-5/12 text-xl '>
                    <h3 className='font-bold'>Authors</h3>

                    <Link href="" className='fade-line'>
                        OpenAI
                    </Link>
                </div>

                <div className='basis-5/12 flex text-xl'>
                    <Link href='' className='fade-line'>
                        Announcements,
                    </Link>

                    <Link href='' className='fade-line pl-1'>
                        Product
                    </Link>
                </div>
             </div>

             <>
                <div className='spacing mb-24'>
                    <p className='text-lg'>
                        It’s been two months since we <Link href=''>announced</Link> GPTs, and users have already created over 3 million custom versions of ChatGPT. Many builders have shared their GPTs for others to use. Today, we&apos;re starting to roll out the GPT Store to ChatGPT Plus, Team and Enterprise users so you can find useful and popular GPTs. Visit chat.openai.com/gpts to explore.
                    </p>
                </div>

                <div className='spacing mb-24'>
                    <h2 className='text-2xl font-bold mb-4'>Discover what’s trending in the store</h2>

                    <p className='text-lg'>
                        The store features a diverse range of GPTs developed by our partners and the community. Browse popular and trending GPTs on the community leaderboard, with categories like DALL·E, writing, research, programming, education, and lifestyle.
                    </p>
                </div>

                <div className='spacing mb-24'>
                    <h2 className='text-2xl font-bold mb-4'>New featured GPTs every week</h2>

                    <p className='text-lg mb-4'>
                        We will also highlight useful and impactful GPTs. Some of our first featured GPTs include:
                    </p>

                    <ul className='list-disc pl-[18px] text-lg'>
                        <li className='mt-2'>
                            Personalized trail recommendations from <Link href='' className='fade-line'>AllTrails</Link>
                        </li>

                        <li className='mt-2'>
                            Search and synthesize results from 200M academic papers with <Link href='' className='fade-line'>Consensus</Link>
                        </li>

                        <li className='mt-2'>
                            Expand your coding skills with Khan Academy’s <Link href='' className='fade-line'>Code Tutor</Link>
                        </li>

                        <li className='mt-2'>
                            Design presentations or social posts with <Link href='' className='fade-line'>Canva</Link>
                        </li>

                        <li className='mt-2'>
                            Find your next read with <Link href='' className='fade-line'>Books</Link>
                        </li>

                        <li className='mt-2'>
                            Learn math and science anytime, anywhere with the <Link href='' className='fade-line'>CK-12 Flexi</Link> AI tutor
                        </li>
                    </ul>
                </div>

                <div className='spacing mb-24'>
                    <h2 className='text-2xl font-bold mb-4'>Include your GPT in the store</h2>

                    <p className='text-lg mb-4'>Building your own GPT is simple and doesn&apos;t require any coding skills.</p>

                    <p className='text-lg mb-4'>If you’d like to share a GPT in the store, you’ll need to:</p>

                    <ol className='list-decimal list-inside text-lg mb-6'>
                        <li>
                            Save your GPT for <strong>Everyone (Anyone with a link </strong>will not be shown in the store).
                        </li>

                        <li>
                            Verify your Builder Profile
                             <strong>
                                (Settings → Builder profile → Enable your name or a verified website).
                             </strong>
                        </li>
                    </ol>

                    <p className='text-lg'>
                        Please review our latest <Link href='' className='fade-line'>usage policies</Link> and <Link href='' className='fade-line'>GPT brand guidelines</Link> to ensure your GPT is compliant. To help ensure GPTs adhere to our policies, we&apos;ve established a new review system in addition to the existing safety measures we&apos;ve built into our products. The review process includes both human and automated review. Users are also <Link href='' className='fade-line'>able to report GPTs.</Link>
                    </p>
                </div>

                <div className='spacing mb-24'>
                    <h2 className='text-2xl font-bold mb-4'>Builders can earn based on GPT usage</h2>

                    <p className='text-lg'>
                        In Q1 we will launch a GPT builder revenue program. As a first step, US builders will be paid based on user engagement with their GPTs. We&apos;ll provide details on the criteria for payments as we get closer.
                    </p>
                </div>

                <div className='spacing mb-24'>
                    <h2 className='text-2xl font-bold mb-4'>Team and Enterprise customers can manage GPTs</h2>

                    <p className='text-lg mb-6'>
                        Today, we announced our new <Link href='' className='fade-line'>ChatGPT Team</Link>plan for teams of all sizes. Team customers have access to a private section of the GPT Store which includes GPTs securely published to your workspace. The GPT Store will be available soon for <Link href='' className='fade-line'>ChatGPT Enterprise</Link> customers and will include enhanced admin controls like choosing how internal-only GPTs are shared and which external GPTs may be used inside your business. Like all usage on ChatGPT Team and Enterprise, we do not use your conversations with GPTs to improve our models.
                    </p>

                    <p className='text-lg mb-14'>
                        Explore GPTs at <Link href='' className='fold-line'>chat.openai.com/gpts.</Link>
                    </p>

                     <button className='border border-solid rounded border-black p-2 hover:bg-black hover:text-white transition-all duration-300'>
                        <Link href='' className='flex items-center text-xl'>
                            Explore GPTs 

                            <MdArrowOutward />
                        </Link>
                    </button>
                </div>
             </>
       </div>
  </section>
  )
}

export default Main