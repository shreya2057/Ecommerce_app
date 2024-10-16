import { Control, FieldValues, Path, useController } from "react-hook-form";
import Select from "react-select";
import { FormWrapper } from "./FormWrapper";
import { colors } from "../../theme/colors";

export const SingleSelect = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  isRequired,
  options,
  placeholder,
  placeholderColor,
  ...rest
}: SingleSelectProps<TFieldValues>) => {
  const {
    fieldState: { error },
    field,
  } = useController({ name, control });

  const { value, onChange } = field;
  return (
    <FormWrapper error={error} isRequired={isRequired} label={label}>
      <Select
        options={options}
        components={{
          IndicatorSeparator: () => null,
        }}
        onChange={(value) => onChange(value?.value)}
        value={options.filter((item) => item.value === value)[0]}
        defaultValue={options.filter((item) => item.value === value)[0]}
        placeholder={placeholder}
        styles={{
          container: (baseStyles) => ({
            ...baseStyles,
            borderColor: "transparent",
            width: "100%",
            fontSize: "16px",
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            color: placeholderColor ?? colors.gray[500],
            fontSize: "16px",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            paddingLeft: 4,
            paddingRight: 4,
            width: "100%",
            height: "40px",
            background: "white",
            boxShadow: "none",
            borderRadius: "6px",
            borderColor: colors.gray[200],
            "&:hover": {
              borderColor: colors.gray[300],
            },
          }),
        }}
        {...rest}
      />
    </FormWrapper>
  );
};

export type SingleSelectProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
  options: { value: string | number; label: string }[];
  placeholderColor?: string;
};
