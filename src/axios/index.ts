import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../constants";
import { TokenService } from "@/utils/token";
import { refreshToken } from "@/services/refreshToken";

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

type RefreshQueueItem = {
  config: AxiosRequestConfig;
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
};

let refreshing = false;
const refreshAndRetryQueue: RefreshQueueItem[] = [];
httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const refresh = TokenService.getToken("refresh_token");
    if (refresh) {
      const status = error?.response?.status;

      const originalRequest = error?.config as AxiosRequestConfig & {
        _retry: boolean;
      };

      // Ensures that same request is not tried multiple times to prevent infinite loop
      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        if (!refreshing) {
          refreshing = true;
          try {
            const newToken = await refreshToken(refresh);
            TokenService.setToken("access_token", newToken);
            refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
              config.headers = {
                ...config.headers,
                Authorization: `Bearer ${newToken}`,
              };
              axios
                .request(config)
                .then((response) => resolve(response))
                .catch((error) => reject(error));
            });
            refreshAndRetryQueue.length = 0; // Clear queue
          } catch (refreshError) {
            Promise.reject(refreshError);
          }
        }
      }
    }
    return Promise.reject(error);
  }
);
