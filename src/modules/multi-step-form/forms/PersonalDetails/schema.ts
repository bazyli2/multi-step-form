import z from "zod";

export const formSchema = z.object({
  name: z.string().min(6),
  email: z.email(),
  message: z.string(),
});
