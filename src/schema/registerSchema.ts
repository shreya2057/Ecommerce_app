import * as z from "zod";
import { format } from "date-fns";
export const registerSchema = z
  .object({
    full_name: z.string().regex(new RegExp(/^(?:\S+\s+){1,}\S+$/), {
      message: "Full name must contain at least two words",
    }),
    email: z.string().email({ message: "Email is not valid" }),
    date_of_birth: z
      .string()
      .min(1, { message: "Date of birth cannot be empty" }),
    phone_number: z.string().min(10, { message: "Mobile number is not valid" }),
    password: z
      .string()
      .min(8, { message: "Password should be 8 charactes long" })
      .regex(
        new RegExp(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
        {
          message:
            "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
        }
      ),
    confirm_password: z
      .string()
      .min(8, { message: "Password should be 8 characters long" }),
  })
  .refine((schema) => schema.password === schema.confirm_password, {
    message: "Password and confirm password should match",
    path: ["confirm_password"],
  })
  .refine(
    (schema) => schema.date_of_birth <= format(new Date(), "yyyy-MM-dd"),
    {
      message: "Date of birth cannot be future date",
      path: ["date_of_birth"],
    }
  );
