import {ChangeEvent, forwardRef} from "react";

interface Props {
    children: string;
    id: string;
    name: string;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    checked?: boolean;
}


const RadioButton = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    const {children, id, name, className, value, checked, onChange} = props;
    return (
        <div
            className={`flex items-center w-full border rounded-md focus-within:bg-green-50 focus-within:border-green-600 ${className}`}>
            <label tabIndex={0} htmlFor={id}
                   className="flex w-full cursor-pointer text-nowrap items-center py-2 text-sm font-medium leading-6 gap-2 px-8 text-gray-900">
                <input
                    ref={ref}
                    value={value}
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    name={name}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                />
                {children}
            </label>
        </div>
    );
});

export default RadioButton;