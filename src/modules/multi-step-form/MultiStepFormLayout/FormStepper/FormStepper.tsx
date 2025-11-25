"use client";

import { Step, StepLabel, Stepper } from "@mui/material";
import { STEP_COUNT } from "../../config";
import { useStepParam } from "../../hooks/useStepParam";

const steps = Array.from({ length: STEP_COUNT }, (v, i) => i);

export function FormStepper() {
  const step = useStepParam();
  return (
    <Stepper activeStep={step - 1}>
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel />
        </Step>
      ))}
    </Stepper>
  );
}
