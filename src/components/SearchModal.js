import { SearchIcon } from 'lucide-react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Do not render modal if not open

    return (
        <div className="fixed inset-0 transition-opacity bg-gray-600 bg-opacity-50 backdrop-blur-sm flex flex-col items-center z-50 py-28" onClick={onClose}>
            <form action="">
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        className="rounded-[8px] w-[28rem] py-4 pl-10 pr-16 text-blue-950 placeholder-gray-400/70 focus:outline-none text-base"
                        placeholder="Search..."
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 border border-gray-200 px-2 py-1 rounded-[4px] text-sm">
                        Ctrl K
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Modal;
