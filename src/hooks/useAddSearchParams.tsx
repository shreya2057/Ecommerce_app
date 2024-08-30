import { useLocation, useSearchParams } from "react-router-dom";

export const useAddSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const addSearchParams = (data: Record<string, string | number>) => {
    if (data && typeof data === "object") {
      Object.keys(data).forEach((key) => {
        const value = data[key as keyof typeof data];
        if (value !== undefined && value !== null && value !== "") {
          searchParams.set(key, String(value));
        }
      });
      setSearchParams(searchParams, { state: location.state });
    }
  };

  const deleteSearchParams = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams, { state: location.state });
  };

  return { addSearchParams, deleteSearchParams };
};
