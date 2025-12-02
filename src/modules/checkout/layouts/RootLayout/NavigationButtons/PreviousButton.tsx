import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { useStepParam } from "@/modules/checkout/hooks/useStepParam";
import { Button } from "@mui/material";
import { ComponentProps } from "react";
import Link from "next/link";
import { STEP_COUNT } from "@/modules/checkout/config";

export function PreviousButton(props: ComponentProps<typeof Button>) {
  const step = useStepParam();
  const previousStep = Math.max(1, step - 1);
  const href = `/multi-step-form/${previousStep}`;
  if (step === 1) return null;
  if (step === STEP_COUNT) return null;
  return (
    <Button
      {...props}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={Link as any}
      href={href}
      startIcon={<ChevronLeftRoundedIcon />}
    >
      Previous
    </Button>
  );
}
