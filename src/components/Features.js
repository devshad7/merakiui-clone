import { LanguagesIcon, MoonIcon, SmartphoneIcon } from 'lucide-react'
import React from 'react'

const Features = () => {
    return (
        <>
            <div className="mx-auto py-12 px-4 md:px-28 mt-0 md:mt-14">
                <div className="grid gap-10 xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="px-2 md:px-0 flex gap-4 md:gap-6">
                        <div className="">
                            <LanguagesIcon className={'dark:text-white'} />
                        </div>
                        <div className="space-y-4">
                            <h2 className='font-medium text-lg text-gray-800 dark:text-white'>Support RTL Languages</h2>
                            <p className='font-medium text-gray-500 dark:text-gray-400'>Seamlessly supports right-to-left (RTL) languages for intuitive interfaces in Arabic, Hebrew, and more.</p>
                        </div>
                    </div>
                    <div className="px-2 md:px-0 flex gap-4 md:gap-6">
                        <div className="">
                            <SmartphoneIcon className={'dark:text-white'} />
                        </div>
                        <div className="space-y-4">
                            <h2 className='font-medium text-lg text-gray-800 dark:text-white'>Fully Responsive</h2>
                            <p className='font-medium text-gray-500 dark:text-gray-400'>Components adapt flawlessly to all devices, ensuring consistent performance from desktops to smartphones.</p>
                        </div>
                    </div>
                    <div className="px-2 md:px-0 flex gap-4 md:gap-6">
                        <div className="">
                            <MoonIcon className={'dark:text-white'} />
                        </div>
                        <div className="space-y-4">
                            <h2 className='font-medium text-lg text-gray-800 dark:text-white'>Elegant Dark Mode</h2>
                            <p className='font-medium text-gray-500 dark:text-gray-400'>Enjoy comfortable viewing in low light with adaptive colors and contrasts for an elegant interface.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features