import { type ReactNode } from 'react';

interface ButtonProps {
    title?: string;
    children: ReactNode;
}

export const DashboardButton = ({ title, children }: ButtonProps) => {
    return(
        <button className="w-max bg-[#393939] p-5 rounded-full">
            <div>
                {children}
            </div>
            {title}
        </button>
    );
}