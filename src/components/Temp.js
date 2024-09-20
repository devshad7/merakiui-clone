import React from 'react'
import Navbar from './Navbar'
import Link from 'next/link'
import { Button } from './ui/button'
import { DownloadIcon, ExternalLinkIcon } from 'lucide-react'
import Footer from './Footer'

const Temp = ({ templete }) => {
    return (
        <>
            <div className="dark:bg-gray-950">
                <Navbar />

                <div className="container relative z-10 px-4 mx-auto md:py-14 py-8 sm:px-6">
                    <div>
                        <div className="max-w-3xl mx-auto w-full">
                            <div className="overflow-hidden bg-gray-100 rounded-xl aspect-video">
                                <img src={templete.src} alt={templete.alt} className="h-full w-full object-cover" />
                            </div>
                            <div className="mt-8">
                                <div>
                                    <div className="flex items-center justify-between gap-x-4">
                                        <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">{templete.title}</h1>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{templete.date}</p>
                                    </div>
                                    <div className="flex items-center mt-2 space-x-2">
                                        <p className="font-medium text-blue-600 dark:text-blue-400">{templete.price}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-500 dark:text-gray-300">{templete.discription}</p>
                                <div className="mt-6 flex items-center gap-4">
                                    <Link href={''} className="flex items-center justify-center w-full px-5 py-3 text-sm text-center text-white transition-colors duration-200 rounded-[.5rem] gap-x-2 hover:bg-blue-800 bg-blue-950">
                                        <DownloadIcon className="h-4 w-4" />
                                        <span>Download</span>
                                    </Link>
                                    <Link href={''} className="flex items-center justify-center w-full px-5 py-3 text-sm text-gray-700 dark:text-white dark:bg-gray-800 transition-colors duration-200 bg-gray-100 rounded-[.5rem] gap-x-2 hover:bg-gray-200">
                                        <ExternalLinkIcon className="h-4 w-4" />
                                        <span>Live Preview</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Temp