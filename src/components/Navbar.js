'use client'

import React, { useState } from 'react'
import Logo from './svg/Logo'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import Search from './Search'
import DarkModeToggle from '@/utils/darkModeToogle'
import MobNav from './MobNav'

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
        <MobNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
            <div className="flex justify-between items-center px-4 md:px-28 py-6 z-50 relative">
                <div className="">
                    <Logo />
                </div>
                <div className="hidden md:block">
                    <div className="text-blue-950 dark:text-white text-sm flex gap-8 items-center">
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
                            <DarkModeToggle />
                        </div>
                    </div>
                </div>
                <div className="block md:hidden dark:text-white">
                    <div className="flex items-center gap-4">
                        <DarkModeToggle />
                        <MenuIcon onClick={() => setIsNavOpen(true)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar