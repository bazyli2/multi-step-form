import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import { Button } from "@mui/material";
import { ComponentProps } from "react";
import Link from "next/link";
import { STEP_COUNT } from "@/modules/checkout/config";

export function PreviousButton(props: Props) {
  const { step, ...rest } = props;
  const previousStep = Math.max(1, step - 1);
  const href = `/checkout/${previousStep}`;
  if (step === 1) return null;
  if (step === STEP_COUNT) return null;
  return (
    <Button
      {...rest}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component={Link as any}
      href={href}
      startIcon={<ChevronLeftRoundedIcon />}
    >
      Previous
    </Button>
  );
}

interface Props extends ComponentProps<typeof Button> {
  step: Step;
}
