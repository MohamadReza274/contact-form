import RadioButton from "./RadioButton.tsx";
import { Control, Controller, FieldError } from "react-hook-form";
import { FormSchemaType } from "../hooks/useContactForm.ts";

const items = [
  { id: 1, title: "General Enquiry", value: "general_enquiry" },
  { id: 2, title: "Support Request", value: "support_request" },
];

interface Props {
  name: keyof FormSchemaType;
  control: Control<FormSchemaType>;
  error?: FieldError;
}

const RadioGroup = (props: Props) => {
  const { name, error } = props;
  return (
    <Controller
      name={name}
      control={props.control}
      render={({ field }) => (
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            Query Type*
          </legend>
          <div className="flex justify-between flex-wrap sm:flex-nowrap my-2 gap-y-2 sm:gap-x-2 items-center">
            {items.map((item) => (
              <RadioButton
                {...field}
                className={"w-1/2 "}
                value={item.value}
                key={item.id}
                id={`item-${item.id}`}
              >
                {item.title}
              </RadioButton>
            ))}
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {error?.message}
            </p>
          )}
        </fieldset>
      )}
    />
  );
};

export default RadioGroup;
