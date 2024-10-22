import { create } from "zustand";
import { UserStoreType } from "../type";

export const useUserStore = create<UserStoreType>((set) => ({
  email: "",
  otp: "",
  updateEmail: (email: string) => {
    set(() => ({ email }));
  },
  updateOtp: (otp: string) => {
    set(() => ({ otp }));
  },
  clearEmail: () => {
    set(() => ({ email: "" }));
  },
  clearOtp: () => {
    set(() => ({ otp: "" }));
  },
  clearUserState: () => {
    set(() => ({ email: "", otp: "" }));
  },
}));
