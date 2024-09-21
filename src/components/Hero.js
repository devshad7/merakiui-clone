import { MoveRightIcon } from 'lucide-react'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <>
            <section className="relative before:scale-y-110 before:absolute before:mx-auto before:inset-x-0 before:-bottom-px before:bg-gradient-to-r before:from-transparent before:via-gray-950/10 dark:before:via-white/20 before:to-transparent before:h-px">
                <div className="px-4 md:px-28 flex flex-col items-center gap-8 py-12">
                    <div className="text-sm mx-auto flex items-center bg-gray-950/20 dark:bg-white/10 dark:border-gray-700 dark:border font-medium gap-x-2 text-white pl-4 pr-1 py-1 md:pl-2 rounded-full animate-pulse">
                        <span>Tailwind CSS Version</span>
                        <div className="text-xs px-2 py-1 rounded-full bg-gray-950/20">
                            <span>v3.3.0</span>
                        </div>
                    </div>
                    <div className="text-center lg:w-8/12 flex flex-col gap-8">
                        <h1 className='text-3xl font-bold sm:text-4xl text-blue-950 dark:text-white lg:text-5xl xl:text-6xl'>Modern - Customizable Tailwind CSS UI Components.</h1>
                        <p className='text-gray-700sm:text-lg dark:text-gray-200'>Meraki UI is a collection of responsive Tailwind CSS components that enhance the user experience of your website. with support for RTL languages, and a sleek Dark Mode.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
                        <Button className='bg-gray-950 h-11 px-7 text-white rounded-[.5rem] font-medium hover:bg-gray-900 hover:text-white hover:shadow-xl dark:bg-gray-800'>
                            Browse Components
                        </Button>
                        <Button className='flex items-center justify-center px-6 text-sm font-medium tracking-wide text-gray-700 capitalize transition-all duration-200 transform border border-gray-300 rounded-[.5rem] sm:mt-0 gap-x-2 h-11 dark:text-white hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 focus:ring focus:ring-blue-300 dark:focus:ring-white/10 focus:ring-opacity-80'>
                            Check out templates
                            <MoveRightIcon className='size-4' />
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero