import {ReactNode} from 'react';
import {twMerge} from "tailwind-merge";

interface Props {
    children: ReactNode | string;
    type: 'button' | 'submit';
    className?: string;
    id?: string;
}

const Button = ({children, type, className}: Props) => {
    return (
        <button
            type={type}
            className={twMerge("rounded bg-green-700 px-2 py-2 text-xs font-semibold text-gray-100 shadow-sm " +
                "hover:bg-green-800 focus-visible:outline focus-visible:outline-2 " +
                "focus-visible:outline-offset-2 focus-visible:outline-green-600 w-full", className)}
        >
            {children}
        </button>
    );
};

export default Button;