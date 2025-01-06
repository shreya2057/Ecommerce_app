import axios from "axios";
import { API_URL } from "../constants";
import { TokenService } from "@/utils/token";

export const httpClient = axios.create({
  baseURL: API_URL,
});

httpClient.interceptors.request.use(
  (config) => {
    const accessToken = TokenService.getToken("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
