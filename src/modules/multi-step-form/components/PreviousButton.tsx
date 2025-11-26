"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { useStepParam } from "../hooks/useStepParam";

export function PreviousButton() {
  const step = useStepParam();
  const disabled = step === 1;
  const previousStep = Math.max(1, step - 1);
  const href = `/multi-step-form/${previousStep}`;
  return (
    <Button
      disabled={disabled}
      component={Link}
      href={href}
      className="rounded-full"
      variant="outlined"
    >
      Previous Step
    </Button>
  );
}
