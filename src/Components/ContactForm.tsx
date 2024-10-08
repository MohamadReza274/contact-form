import Input from "./Input.tsx";
import RadioGroup from "./RadioGroup.tsx";
import TextArea from "./TextArea.tsx";
import Button from "./Button.tsx";
import { SubmitHandler } from "react-hook-form";
import useContactForm, { FormSchemaType } from "../hooks/useContactForm.ts";
import CheckBox from "./CheckBox.tsx";

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useContactForm();

  const onSubmit: SubmitHandler<FormSchemaType> = (values) => {
    console.log(values);
  };

  return (
    <div className="overflow-auto rounded-lg bg-white shadow max-w-lg md:max-w-2xl w-full mx-auto">
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-2xl my-4 text-center">Contact Us</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="md:col-span-1">
            <Input
              control={control}
              id="firstName"
              name="firstName"
              label="First Name*"
              type="text"
              error={errors.firstName}
            />
          </div>
          <div className="md:col-span-1">
            <Input
              control={control}
              id="lastName"
              name="lastName"
              label="Last Name*"
              type="text"
              error={errors.lastName}
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Input
              control={control}
              id="email"
              name="email"
              label="Email*"
              type="email"
              error={errors.email}
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <RadioGroup name="query" error={errors.query} control={control} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <TextArea
              control={control}
              id="msg"
              name="message"
              label="Message*"
              error={errors.message}
            />
          </div>
          <div className="col-span-1 md:col-span-2 my-4">
            <CheckBox
              name="terms"
              label="I consent to being contacted by the team*"
              id="approve"
              control={control}
              error={errors.terms}
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
