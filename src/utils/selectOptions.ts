export const selectOptions = ({
  options,
  valueKey,
  labelKey,
}: {
  options: Record<string, string>[];
  valueKey: string;
  labelKey: string;
}) => {
  return options.map((option) => {
    return { value: option[valueKey], label: option[labelKey] };
  }, {});
};
