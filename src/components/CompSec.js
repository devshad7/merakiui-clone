import { components } from '@/utils/components'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const CompSec = () => {
  return (
    <>
      <div className="px-4 md:px-28  py-12 mt-12 md:mt-20 mx-auto">
        <div className="text-center">
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-950 dark:text-white'>
            Tailwind CSS
            <span className="text-blue-500"> Components</span>
          </h1>
          <p className='max-w-2xl mx-auto mt-6 text-base text-gray-600 dark:text-gray-400'>Alert, Heroes, features, sign up forms, CTA, and everything you need to build your websites fast with RTL Languages Support.</p>
        </div>

        <div className="grid grid-cols-1 gap-2 mt-4 md:gap-8 sm:mt-8 lg:mt-16 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {components.map((data) => {
            return (
              <Link href={data.href} className="p-px hover:scale-[1.02] transition-all duration-200 group rounded-xl bg-gradient-to-b from-gray-200 to-white dark:from-gray-800 dark:to-gray-900/80 hover:from-blue-300 dark:hover:bg-blue-400" key={data.id}>
                <div className="p-[calc(0.5rem-1px)] rounded-[calc(0.75rem-1px)] bg-white dark:bg-gray-950/80 dark:group-hover:bg-gray-950/70">
                  <img className="rounded-xl" src={data.src} alt={data.alt} />
                  <div className="flex items-start justify-between px-2 pt-4 pb-2">
                    <div>
                      <h3 className="text-lg font-medium transition-colors duration-200 text-blue-950 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-600">
                        {data.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{data.componentNo}</p>
                    </div>
                    <p className="bg-blue-100/60 text-blue-500 dark:bg-blue-500/30 dark:text-white inline-block px-3 py-1 tracking-wide font-medium text-xs rounded-[.5rem]">
                      {data.category}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="flex justify-center mt-12">
          <Link href={''}>
            <Button className='px-6 py-3 text-sm font-medium text-white transition-colors duration-300 rounded-[.5rem] bg-blue-950 dark:bg-blue-800 hover:bg-blue-900'>
              Show All Components
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CompSec