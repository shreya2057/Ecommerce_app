import { Control, FieldValues, Path, useController } from "react-hook-form";
import { FormWrapper } from "./FormWrapper";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { colors } from "../../theme/colors";

export const Input = <TFieldValues extends FieldValues>({
  control,
  leftElement,
  rightElement,
  name,
  ...restFields
}: InputProps<TFieldValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { onChange, value } = field;
  return (
    <FormWrapper error={error}>
      <InputGroup>
        <InputLeftElement>{leftElement}</InputLeftElement>
        <ChakraInput
          borderColor={colors.brand[400]}
          _active={{
            borderColor: colors.brand[400],
          }}
          _focusVisible={{ borderColor: colors.brand[400] }}
          _hover={{
            borderColor: colors.brand[400],
          }}
          onChange={onChange}
          value={value}
          {...restFields}
        />
        <InputRightElement>{rightElement}</InputRightElement>
      </InputGroup>
    </FormWrapper>
  );
};

export type InputProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  name: Path<TFieldValues>;
} & ChakraInputProps;
