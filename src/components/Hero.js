import { MoveRightIcon } from 'lucide-react'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <>
            <div className="px-4 md:px-28 flex flex-col items-center gap-8 py-12">
                <div className="text-sm mx-auto flex items-center bg-gray-950/20 font-medium gap-x-2 text-white pl-3 pr-1 py-1 md:pl-2 rounded-full animate-pulse">
                    <span>Tailwind CSS Version</span>
                    <div className="text-xs px-2 py-1 rounded-full bg-gray-950/20">
                        <span>v3.3.0</span>
                    </div>
                </div>
                <div className="text-center lg:w-8/12 flex flex-col gap-8">
                    <h1 className='text-3xl lg:text-5xl xl:text-6xl font-bold text-blue-950'>Modern - Customizable Tailwind CSS UI Components.</h1>
                    <p className='text-gray-700 font-normal text-base md:text-lg'>Meraki UI is a collection of responsive Tailwind CSS components that enhance the user experience of your website. with support for RTL languages, and a sleek Dark Mode.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
                    <Button className='bg-gray-950 h-11 px-7 text-white rounded-[.5rem] font-medium hover:bg-gray-900 hover:text-white hover:shadow-xl'>
                        Browse Components
                    </Button>
                    <Button className='border border-gray-300 h-11 px-7 text-gray-700 hover:border-gray-400 rounded-[.5rem] font-medium hover:shadow-sm flex gap-2 justify-center items-center'>
                        Check out templates
                        <MoveRightIcon className='size-4' />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Hero