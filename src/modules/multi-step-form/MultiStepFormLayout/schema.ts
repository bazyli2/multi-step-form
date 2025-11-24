import z from "zod";

const stepCount = 3;

export const paramsSchema = z.object({
  step: z.coerce.number().int().min(1).max(stepCount),
});
