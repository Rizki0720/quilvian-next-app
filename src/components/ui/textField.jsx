import { Field as formikField ,useField } from "formik";
import { Field } from "./field";
import { Input } from "@chakra-ui/react";


export default function TextField({label, ...props}) {
    const [field, meta] = useField(props);

    return(
        <Field isInvalid={meta.touched && meta.error}>
            <formikField as={Input} autoComplete="off" {...field} {...props} />
        </Field>
    )
}