import { StepConnector as MuiStepConnector } from "@mui/material";
import { ComponentProps } from "react";

export function StepConnector(props: ComponentProps<typeof MuiStepConnector>) {
  return <MuiStepConnector {...props} />;
}
