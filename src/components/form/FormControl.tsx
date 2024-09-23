import { FieldValues } from "react-hook-form";
import { Input, InputProps } from "./Input";
import { SingleSelect, SingleSelectProps } from "./Select";

export const FormControl = <TfieldValues extends FieldValues>({
  inputControl,
  ...rest
}: FormControlType<TfieldValues>) => {
  switch (inputControl) {
    case "input":
      return <Input {...(rest as InputProps<TfieldValues>)} />;
    case "single-select":
      return <SingleSelect {...(rest as SingleSelectProps<TfieldValues>)} />;
  }
};

type FormControlType<TFieldValues extends FieldValues> = {
  inputControl: "input" | "single-select";
} & (InputProps<TFieldValues> | SingleSelectProps<TFieldValues>);
