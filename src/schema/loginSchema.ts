import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Enter valid email" })
    .min(1, { message: "Cannot be empty" }),
  password: z
    .string()
    .min(6, { message: "Password should have atleast 8 characters" }),
});
