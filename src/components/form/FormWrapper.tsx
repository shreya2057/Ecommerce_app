import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

type FormWrapperType = {
  label?: string;
  error?: FieldError;
  children: React.ReactNode;
  isRequired?: boolean;
};

export const FormWrapper = ({ label, error, children }: FormWrapperType) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};
