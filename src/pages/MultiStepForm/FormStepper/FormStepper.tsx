"use client";

import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

const steps = [1, 2, 3, 4];
export function FormStepper() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
