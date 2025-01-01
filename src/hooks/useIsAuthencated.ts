import { useQuery } from "react-query";
import { TokenService } from "../utils/token";

const isAuthenticated = () => {
  const token = TokenService.getToken("access_token");
  return !!token;
};

export const useIsAuthenticated = () => {
  return useQuery({
    queryKey: ["isauthenticated"],
    queryFn: isAuthenticated,
  });
};
