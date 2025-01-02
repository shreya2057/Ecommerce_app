import { FormControl } from "@/components/form/FormControl";
import { useAddSearchParams } from "@/hooks/useAddSearchParams";
import { parseQueryString } from "@/utils/parseQueryString";
import { SearchIcon } from "@chakra-ui/icons";
import { CloseButton } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const initialValues = {
  product: "",
  category: "",
};

export const Search = () => {
  const { control, handleSubmit, reset } = useForm<typeof initialValues>({
    defaultValues: initialValues,
  });
  const { addSearchParams, deleteSearchParams } = useAddSearchParams();
  const location = useLocation();
  const searchValue = parseQueryString(location.search);

  return (
    <form onChange={handleSubmit(addSearchParams)}>
      <FormControl
        type="text"
        control={control}
        name="product"
        inputControl="input"
        placeholder="Search products"
        leftElement={<SearchIcon color="gray.400" />}
        rightElement={
          searchValue?.product && (
            <CloseButton
              onClick={() => {
                deleteSearchParams("product");
                reset({});
              }}
            />
          )
        }
      />
    </form>
  );
};
