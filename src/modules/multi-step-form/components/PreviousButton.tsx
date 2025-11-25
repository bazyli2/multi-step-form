"use client";

import { useParams } from "next/navigation";
import { paramsSchema } from "../schema";
import { Button } from "@mui/material";
import Link from "next/link";

export function PreviousButton() {
  const params = useParams();
  const result = paramsSchema.safeParse(params);
  if (!result.success) return null;
  const { step } = result.data;
  const disabled = step === 1;
  const href = `/multi-step-form/${step - 1}`;
  return (
    <Button
      disabled={disabled}
      component={Link}
      href={href}
      className="rounded-full"
      variant="outlined"
    >
      Next Step
    </Button>
  );
}
