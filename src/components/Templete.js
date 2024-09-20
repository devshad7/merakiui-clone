import { templetes } from '@/utils/templetes'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Templete = () => {
    return (
        <>
            <div className="px-4 md:px-28  py-12 mt-12 md:mt-20 mx-auto">
                <div className="text-center">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-950 dark:text-white'>
                        Tailwind CSS
                        <span className="text-blue-500"> Templates</span>
                    </h1>
                    <p className='max-w-2xl mx-auto mt-6 text-base text-gray-600 dark:text-gray-400'>Tailwind CSS landing pages, dashboard, and templates that shapes with RTL Languages Support. built with AlpineJs, Laravel Blade, and Vue3 Templates.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-12 xl:gap-12 md:grid-cols-2">
                    {templetes.map((data) => {
                        return (
                            <Link href={data.slug ? `templetes/${data.slug}` : data.href} className="hover:scale-[1.03] duration-200 transition-all" key={data.id}>
                                <img src={data.src} alt={data.alt} className='object-cover w-full border border-gray-100 dark:border-gray-900 rounded-xl aspect-video' />
                                <div className="mt-6">
                                    <div className="flex items-center justify-between space-x-4">
                                        <h2 className="text-xl font-semibold tracking-wide text-gray-800 dark:text-white">{data.title}</h2>
                                        <p className="font-medium text-blue-600 dark:text-blue-400">{data.price}</p>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                                        {data.discription}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="flex justify-center mt-12">
                    <Link href={''}>
                        <Button className='px-6 py-3 text-sm font-medium text-white transition-colors duration-300 rounded-[.5rem] bg-blue-950 hover:bg-blue-900 dark:bg-blue-800'>
                            Show All Templetes
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Templete