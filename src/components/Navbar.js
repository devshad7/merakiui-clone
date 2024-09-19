import React from 'react'
import Logo from './svg/Logo'
import Link from 'next/link'
import { MenuIcon, SunMoonIcon } from 'lucide-react'
import Search from './Search'

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center px-4 md:px-28  py-6">
                <div className="">
                    <Logo />
                </div>
                <div className="hidden md:block">
                    <div className="text-blue-950 text-sm flex gap-8 items-center">
                        <Search />
                        <Link href={''}>
                            Components
                        </Link>
                        <Link href={''}>
                            Templetes
                        </Link>
                        <Link href={''}>
                            Request component
                        </Link>
                        <div className="">
                            <Link href={''}>
                                <SunMoonIcon className={'size-5'} />
                            </Link>
                        </div>
                    </div>
                </div>
                <MenuIcon className='block md:hidden' />
            </div>
        </>
    )
}

export default Navbar