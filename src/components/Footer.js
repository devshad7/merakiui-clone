import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Logo from './svg/Logo'

const Footer = () => {
    return (
        <>
            <div className="px-4 md:px-28  py-12 mt-12 md:mt-20 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="sm:col-span-3 xl:col-span-2">
                        <h2 className="text-xl font-bold text-blue-950">
                            Sign up for our newsletter
                        </h2>
                        <div className="mt-6">
                            <form className="sm:flex sm:items-center">
                                <label htmlFor="email" className="sr-only">Email Address</label>
                                <div>
                                    <input
                                        type="email"
                                        className="block w-full placeholder-gray-400/70 sm:w-80 rounded-[.5rem] border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <Button className="relative flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white transition-colors duration-300 rounded-[.5rem] pointer-events-auto bg-blue-950 hover:bg-blue-900">
                                        Subscribe
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-blue-950">Ressources</p>
                        <div className="flex flex-col items-start mt-5 space-y-4">
                            <Link href={''} className="text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-blue-700">
                                Components
                            </Link>
                            <Link href={''} className="text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-blue-700">
                                Templetes
                            </Link>
                            <Link href={''} className="text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-blue-700">
                                Tutorials
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-blue-950">Community</p>
                        <div className="flex flex-col items-start mt-5 space-y-4">
                            <Link href={''} className="text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-blue-700">
                                Github
                            </Link>
                            <Link href={''} className="text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-blue-700">
                                Twitter
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-blue-950">Sponser us</p>
                        <div className="flex flex-col items-start mt-5 space-y-4">
                            <Link href={''} className="text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-blue-700">
                                PayPal
                            </Link>
                            <Link href={''} className="text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-blue-700">
                                Patreon
                            </Link>
                            <Link href={''} className="text-sm text-gray-500 transition-colors duration-300 hover:underline hover:text-blue-700">
                                Buy me a Coffee
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-12 space-y-4 md:mt-20 md:space-y-0 md:flex-row md:justify-between">
                    <Logo />
                    <p className="text-sm text-center text-gray-500">© 2024 - 2024 Meraki UI. Made by with ❤️ for Developers.</p>
                </div>
            </div>
        </>
    )
}

export default Footer