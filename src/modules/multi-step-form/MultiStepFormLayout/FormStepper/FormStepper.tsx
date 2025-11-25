"use client";

import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { STEP_COUNT } from "../../config";
import { StepConnector } from "./StepConnector";
import { StepIcon } from "./StepIcon";
import { useStepParam } from "../../hooks/useStepParam";

const steps = Array.from({ length: STEP_COUNT }, (v, i) => i);

export function FormStepper() {
  const step = useStepParam();
  return (
    <Stepper connector={<StepConnector />} activeStep={step - 1}>
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel StepIconComponent={StepIcon} />
        </Step>
      ))}
    </Stepper>
  );
}
