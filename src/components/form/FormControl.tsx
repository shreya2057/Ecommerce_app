import { FieldValues } from "react-hook-form";
import { Input, InputProps } from "./Input";

export const FormControl = <TfieldValues extends FieldValues>({
  inputControl,
  ...rest
}: FormControlType<TfieldValues>) => {
  switch (inputControl) {
    case "input":
      return <Input {...(rest as InputProps<TfieldValues>)} />;
  }
};

type FormControlType<TFieldValues extends FieldValues> = {
  inputControl: "input";
} & InputProps<TFieldValues>;
