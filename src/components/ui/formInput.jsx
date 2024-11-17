"use client";

import { useField } from "formik";
import { Input, FormControl, FormErrorMessage } from "@chakra-ui/react";

const FormInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <Input
        {...field}
        {...props}
        borderColor={meta.touched && meta.error ? "red.500" : "gray.300"}
        focusBorderColor="blue.500"
        size="lg"
        mt={2}
      />
      {meta.touched && meta.error && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormInput;
