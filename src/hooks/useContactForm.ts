import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

// {message: "To submit this form, please consent to being contacted"}

const schema = z.object({
    firstName: z.string().min(3, "First name is required"),
    lastName: z.string().min(3, "Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    query: z.string().min(1, "Query is required"),
    message: z.string().min(20, "Message be at least 20 characters long"),
    terms: z.boolean().refine((value) => value, {
        message: 'This is required',
    })
})

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    query: "",
    message: "",
    terms: false
}

export type FormSchemaType = z.infer<typeof schema>;

const useContactForm = () => {
    return useForm<FormSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: initialValues
    });
}

export default useContactForm;