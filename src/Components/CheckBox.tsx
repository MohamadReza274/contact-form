import { twMerge } from "tailwind-merge";
import { Control, Controller, FieldError } from "react-hook-form";
import { FormSchemaType } from "../hooks/useContactForm.ts";
import React from "react";

interface Props {
  name: keyof FormSchemaType;
  label: string;
  id: string;
  className?: string;
  control: Control<any>;
  error?: FieldError;
}

const CheckBox: React.FC<Props> = (props: Props) => {
  const { name, control, id, label, className, error } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="relative flex flex-col items-start">
          <div className={"flex h-6 items-center"}>
            <div>
              <input
                id={id}
                {...field}
                checked={field.value === true}
                aria-describedby={`${name}-description`}
                type="checkbox"
                className={twMerge(
                  "h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600",
                  className
                )}
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor={id} className="font-medium text-gray-900">
                {label}
              </label>
            </div>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default CheckBox;
