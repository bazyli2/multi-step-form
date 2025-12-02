import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useStepParam } from "@/modules/checkout/hooks/useStepParam";
import { Button } from "@mui/material";
import { ComponentProps } from "react";
import Link from "next/link";
import { STEP_COUNT } from "@/modules/checkout/config";

export function NextButton(props: ComponentProps<typeof Button>) {
  const step = useStepParam();
  const nextStep = Math.min(STEP_COUNT, step + 1);
  const href = `/multi-step-form/${nextStep}`;
  if (step === STEP_COUNT) return null;
  return (
    <Button
      {...props}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={Link as any}
      href={href}
      variant="contained"
      endIcon={<ChevronRightRoundedIcon />}
      sx={{ width: { xs: "100%", sm: "fit-content" } }}
    >
      {step === STEP_COUNT - 1 ? "Place order" : "Next"}
    </Button>
  );
}
