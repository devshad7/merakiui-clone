import { XIcon } from 'lucide-react';
import Logo from './svg/Logo';
import Link from 'next/link';

const MobNav = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Do not render modal if not open

    return (
        <div className="scale-y-100 fixed inset-0 z-[100] w-full h-screen bg-white/70 backdrop-blur-2xl dark:bg-gray-900/70 lg:hidden" onClick={onClose}>
            <div className="absolute inset-x-0 top-0 z-10 p-4 transition origin-top-right transform" onClick={(e) => e.stopPropagation()}>
                <div className="pb-3 overflow-hidden bg-white border border-gray-100 shadow-md shadow-gray-200/50 dark:shadow-none dark:border-gray-800 rounded-xl dark:bg-gray-900">
                    <div className="flex items-center justify-between px-5 pt-4">
                        <Logo />
                        <div className="-mr-2">
                            <div className="inline-flex items-center justify-center p-2 text-gray-700 rounded-[.5rem] dark:hover:bg-gray-800 dark:text-gray-200 hover:bg-gray-100" onClick={onClose}>
                                <XIcon className={'w-5 h-5'} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-5 pt-4 pb-3 space-y-4">
                        <Link href={'/'} className={'text-sm capitalize transition-colors duration-300 text-blue-950 dark:text-white dark:hover:text-blue-400 hover:text-blue-700'}>
                            Components
                        </Link>
                        <Link href={'/'} className={'text-sm capitalize transition-colors duration-300 text-blue-950 dark:text-white dark:hover:text-blue-400 hover:text-blue-700'}>
                            Templetes
                        </Link>
                        <Link href={'/'} className={'text-sm capitalize transition-colors duration-300 text-blue-950 dark:text-white dark:hover:text-blue-400 hover:text-blue-700'}>
                            Request Component
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobNav
