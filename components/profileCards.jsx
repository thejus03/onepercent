import React from 'react'
import gobizIcon from '@/public/gobiz.png'
import Image from 'next/image'
import moneh from '@/public/moneh.png'
const ProfileCards = () => {
    return (
        <div>
            <section>
                <div className="py-16">
                    <div className="mx-auto px-6 max-w-6xl text-gray-500">
                        <div className="text-center">
                            <h2 className="text-3xl text-gray-950 font-semibold">Welcome to your business</h2>
                            <p className="mt-6 text-gray-700 ">These are your posts</p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {/* one element */}
                            <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                                <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300  dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                                <div className="relative">
                                    <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20">
                                        <Image className="text-[#000014] left-[22%] dark:text-white " fill src={gobizIcon} ></Image>
                                    </div>

                                    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                        <p className="text-gray-700 dark:text-gray-300">Set up your business</p>
                                    </div>

                                    <div className="flex gap-3 mt-6 -mb-8 py-4">
                                        <a href="#" className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                            <span>Register</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 13l-5 5m0 0l-5-5m5 5V6"></path></svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            {/* one element */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProfileCards