import { type ReactNode } from 'react';

interface ButtonProps {
    title?: string;
    children: ReactNode;
}

export const DashboardButton = ({ title, children }: ButtonProps) => {
    return(
        <div className='flex flex-col items-center gap-1'>
            <button className="w-max bg-[#393939] p-5 rounded-full">
                <div>
                    {children}
                </div>
            </button>
            <p className='text-[#000000]'>{title}</p>
        </div>
    );
}