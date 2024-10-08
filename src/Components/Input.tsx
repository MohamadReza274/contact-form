import { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";
import { Control, useController, FieldError } from "react-hook-form";
import { FormSchemaType } from "../hooks/useContactForm.ts";
import React from "react";

interface Props {
  name: keyof FormSchemaType;
  id: string;
  className?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  control: Control<any>;
  error?: FieldError;
}
const errorClass =
  "ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6";

const Input: React.FC<Props> = (props: Props) => {
  const { name, type, placeholder, label, control, error, className } = props;
  const { field } = useController({ name, control });

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...field}
          type={type}
          id={name}
          placeholder={placeholder}
          className={twMerge(
            "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6",
            error?.message && errorClass,
            className
          )}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error?.message as string}
        </p>
      )}
    </div>
  );
};

export default Input;
