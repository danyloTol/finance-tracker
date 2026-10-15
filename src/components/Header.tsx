import { Bell } from 'lucide-react';

export const Header = () => {
    return (
        <header className="grid grid-cols-[auto_1fr_auto] gap-3">
            <div className='flex justidy-center items-center'>
                <div className='w-12 h-12 rounded-full bg-black'></div>
            </div>
            <div>
                <h3>Good Morning</h3>
                <h1 className='text-xl'>Name Surname</h1>
            </div>
            <div className='h-full flex justify-center mt-2'>
                <button className='h-max hover:text-[#575757] duration-300'>
                    <Bell />
                </button>
            </div>
        </header>
    );
}