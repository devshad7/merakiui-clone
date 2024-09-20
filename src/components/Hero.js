import { MoveRightIcon } from 'lucide-react'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <>
            <section className="relative before:scale-y-110 before:absolute before:mx-auto before:inset-x-0 before:-bottom-px before:bg-gradient-to-r before:from-transparent before:via-gray-950/10 dark:before:via-white/20 before:to-transparent before:h-px">
                <div className="absolute -z-50 w-full h-[100vh] overflow-hidden inset-x-0 -top-20">
                    <svg className="min-w-[80rem] -translate-x-60 md:translate-x-0 mx-auto w-full -scale-y-100 contrast-150 opacity-50 dark:opacity-25" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1739_2)"><g filter="url(#filter0_f_1739_2)"><ellipse cx="987.203" cy="967.25" rx="581" ry="356.5" transform="rotate(8.47676 987.203 967.25)" fill="#9641C1"></ellipse></g><g filter="url(#filter1_f_1739_2)"><ellipse cx="991.907" cy="1000.77" rx="454.5" ry="280.5" transform="rotate(11.69 991.907 1000.77)" fill="#FF94C8"></ellipse></g><g filter="url(#filter2_f_1739_2)"><ellipse cx="405" cy="1050" rx="448" ry="332" fill="#007FEC"></ellipse></g><g filter="url(#filter3_f_1739_2)"><ellipse cx="779" cy="985.5" rx="259" ry="204.5" fill="#FFE8AE"></ellipse></g></g><defs><filter id="filter0_f_1739_2" x="110.117" y="304.308" width="1754.18" height="1325.88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1739_2"></feGaussianBlur></filter><filter id="filter1_f_1739_2" x="343.172" y="510.984" width="1297.47" height="979.573" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1739_2"></feGaussianBlur></filter><filter id="filter2_f_1739_2" x="-343" y="418" width="1496" height="1264" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1739_2"></feGaussianBlur></filter><filter id="filter3_f_1739_2" x="320" y="581" width="918" height="809" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1739_2"></feGaussianBlur></filter><clipPath id="clip0_1739_2"><rect width="1440" height="900" fill="white"></rect></clipPath></defs></svg>
                </div>
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