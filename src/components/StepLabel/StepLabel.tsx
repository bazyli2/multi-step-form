import { StepLabel as MuiStepLabel } from "@mui/material";
export function StepLabel() {
  return (
    <MuiStepLabel
      slotProps={{
        stepIcon: {
          className:
            "[&>text]:fill-black [&>text]:font-semibold fill-azureish-white",
        },
      }}
    />
  );
}
