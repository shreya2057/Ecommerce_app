import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { FieldValues } from "react-hook-form";
import { FormControl } from "./FormControl";
import { InputProps } from "./Input";

export const Password = <TFieldValues extends FieldValues>({
  control,
  label,
  ...restFields
}: InputProps<TFieldValues>) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <FormControl
      control={control}
      label={label}
      inputControl="input"
      type={isOpen ? "text" : "password"}
      rightElement={
        <IconButton
          size="sm"
          bg={"transparent"}
          aria-label="Password"
          icon={isOpen ? <ViewIcon /> : <ViewOffIcon />}
          onClick={onToggle}
        />
      }
      {...restFields}
    />
  );
};
