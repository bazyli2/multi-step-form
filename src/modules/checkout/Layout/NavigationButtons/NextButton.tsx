import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Button } from "@mui/material";
import { ComponentProps } from "react";
import Link from "next/link";
import { STEP_COUNT } from "@/modules/checkout/config";
import { Step } from "../../schema";

export function NextButton(props: Props) {
  const { step, ...rest } = props;
  const nextStep = Math.min(STEP_COUNT, step + 1);
  const href = `/checkout/${nextStep}`;
  if (step === STEP_COUNT) return null;
  return (
    <Button
      {...rest}
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

interface Props extends ComponentProps<typeof Button> {
  step: Step;
}
