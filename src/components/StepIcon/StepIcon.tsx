import { clsx } from "@/utils/clsx";
import { StepIcon as MuiStepIcon } from "@mui/material";
import { ComponentProps } from "react";

export function StepIcon(props: ComponentProps<typeof MuiStepIcon>) {
  return (
    <MuiStepIcon
      {...props}
      className={clsx(
        "[&>text]:fill-black [&>text]:font-semibold text-azureish-white",
        {
          "text-blue": props.active ?? false,
        },
      )}
    />
  );
}
