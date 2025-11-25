"use client";

import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { STEP_COUNT } from "../../config";
import { StepConnector } from "./StepConnector";
import { StepIcon } from "./StepIcon";

const steps = Array.from({ length: STEP_COUNT }, (v, i) => i);

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
