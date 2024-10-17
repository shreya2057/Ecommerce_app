import { TokenService } from "../utils/token";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import { useQueryClient } from "react-query";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return () => {
    try {
      TokenService.removeToken("access_token");
      TokenService.removeToken("refresh_token");
      queryClient.invalidateQueries("isauthenticated");
      navigate(ROUTES.LANDING);
    } catch (e) {
      console.log(e);
    }
  };
};
