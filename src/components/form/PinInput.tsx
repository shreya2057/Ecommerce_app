import {
  HStack,
  PinInput as ChakraPinInput,
  PinInputField,
  PinInputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { FormWrapper } from "./FormWrapper";
import { Control, FieldValues, Path, useController } from "react-hook-form";

export type PinInputProps<TFieldValues extends FieldValues> = {
  label?: string;
  name: Path<TFieldValues>;
  length: number;
  control: Control<TFieldValues>;
} & ChakraInputProps;

export const PinInput = <TFieldValues extends FieldValues>({
  length,
  label,
  name,
  control,
  ...restFields
}: PinInputProps<TFieldValues>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const { value, onChange } = field;
  return (
    <FormWrapper label={label} error={error}>
      <HStack width={"100%"} justifyContent={"center"}>
        <ChakraPinInput
          size={{ base: "sm", md: "md" }}
          value={value}
          onChange={onChange}
          {...restFields}
        >
          {Array.from({ length }).map((_, index: number) => (
            <PinInputField
              key={index}
              borderWidth={1}
              borderColor={"white"}
              bg={"white"}
              shadow={"md"}
            />
          ))}
        </ChakraPinInput>
      </HStack>
    </FormWrapper>
  );
};
