import { StepIcon as MuiStepIcon } from "@mui/material";
import { ComponentProps } from "react";

export function StepIcon(props: ComponentProps<typeof MuiStepIcon>) {
  return <MuiStepIcon {...props} />;
}
