import { Control, Controller, FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { FormSchemaType } from "../hooks/useContactForm";

interface Props {
  name: keyof FormSchemaType; // Dynamically typed based on FormSchemaType
  id: string;
  className?: string;
  placeholder?: string;
  label?: string;
  control: Control<any>;
  error?: FieldError; // Ensure errors are strongly typed
}

const Input = (props: Props) => {
  const { name, placeholder, control, id, label, className, error } = props;
  const errorClass =
    "ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6";

  // Helper to check for the existence of an error for the given field name
  const hasError = error !== undefined;
  const errorMessage = hasError ? (error?.message as string) : undefined;

  return (
    <Controller
      name={name} // Name dynamically typed from FormSchemaType
      control={control}
      render={({ field }) => (
        <div>
          <label
            htmlFor={id}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
          <div className="mt-2">
            <textarea
              rows={4}
              {...field}
              placeholder={placeholder}
              id={id}
              className={twMerge(
                "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6",
                className,
                hasError ? errorClass : ""
              )}
            />
            {hasError && (
              <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default Input;
