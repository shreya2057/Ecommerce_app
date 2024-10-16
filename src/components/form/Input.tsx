import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { FormWrapper } from "./FormWrapper";

export const Input = <TFieldValues extends FieldValues>({
  control,
  leftElement,
  rightElement,
  name,
  label,
  ...restFields
}: InputProps<TFieldValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { onChange, value } = field;
  return (
    <FormWrapper error={error} label={label}>
      <InputGroup>
        {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}
        <ChakraInput
          borderColor={"gray.200"}
          _active={{
            borderColor: "gray.300",
          }}
          _focusVisible={{ borderColor: "gray.300" }}
          _hover={{
            borderColor: "gray.300",
          }}
          bg={"white"}
          onChange={onChange}
          value={value}
          _placeholder={{
            color: "gray.500",
            opacity: 0.5,
          }}
          {...restFields}
        />
        {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
      </InputGroup>
    </FormWrapper>
  );
};

export type InputProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  name: Path<TFieldValues>;
  label?: string;
} & ChakraInputProps;
