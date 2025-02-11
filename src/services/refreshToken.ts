import { API_ENDPOINTS } from "@/api";
import { API_URL } from "@/constants";
import axios from "axios";

export const refreshToken = async (refresh: string) => {
  try {
    const response = await axios.post(
      API_ENDPOINTS.REFRESH_TOKEN,
      { refresh },
      { baseURL: API_URL }
    );
    const access_token = response?.data?.data.access_token;
    if (access_token) {
      return access_token;
    } else {
      throw new Error(
        "Failed to refresh access token: No access token in response"
      );
    }
  } catch (error) {
    console.error("Refresh token error:", error);
    throw error;
  }
};
