import * as z from "zod";
export const otpSchema = z.object({
  otp: z.string().min(6, { message: "Code is required" }),
});
