"use client";

import { STEP_COUNT } from "../config";
import { Button } from "@mui/material";
import Link from "next/link";
import { useStepParam } from "../hooks/useStepParam";

export function NextButton() {
  const step = useStepParam();
  const disabled = step === STEP_COUNT;
  const nextStep = Math.min(STEP_COUNT, step + 1);
  const href = `/multi-step-form/${nextStep}`;
  return (
    <Button
      disabled={disabled}
      component={Link}
      href={href}
      className="rounded-full"
      variant="contained"
    >
      Next Step
    </Button>
  );
}
