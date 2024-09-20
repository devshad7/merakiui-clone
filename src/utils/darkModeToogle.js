'use client'

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check for a previously saved theme in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <Link href={''} onClick={toggleDarkMode}>
            {isDarkMode ? <SunIcon className={'size-5'} /> : <MoonIcon className={'size-5'} />}
        </Link>
    );
};

export default DarkModeToggle;
