import { notFound } from "next/navigation";
import z from "zod";

export function parseParams<T extends z.ZodTypeAny>(
  schema: T,
  params: unknown,
) {
  const result = schema.safeParse(params);
  if (!result.success) notFound();
  return result.data;
}
