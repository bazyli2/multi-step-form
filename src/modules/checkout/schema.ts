import z from "zod";

export const paramsSchema = z.object({
  step: z.union([
    z.literal("1").transform(() => 1 as const),
    z.literal("2").transform(() => 2 as const),
    z.literal("3").transform(() => 3 as const),
    z.literal("4").transform(() => 4 as const),
  ]),
});

export type Step = z.infer<typeof paramsSchema>["step"];
