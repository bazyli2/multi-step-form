"use client";

import { StepConnector } from "@/components/StepConnector";
import { StepIcon } from "@/components/StepIcon";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

const steps = [1, 2, 3, 4];
export function FormStepper() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Stepper connector={<StepConnector />} activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel StepIconComponent={StepIcon} />
        </Step>
      ))}
    </Stepper>
  );
}
