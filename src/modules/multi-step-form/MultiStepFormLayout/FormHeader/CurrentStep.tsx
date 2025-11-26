"use client";

import { STEP_COUNT } from "../config";
import { useStepParam } from "../hooks/useStepParam";

export function CurrentStep() {
  const currentStep = useStepParam();
  return (
    <p className="text-blue font-medium text-sm leading-6">{`Step ${currentStep}/${STEP_COUNT}`}</p>
  );
}
