"use client";

import { Box } from "@mui/material";
import { PreviousButton } from "./PreviousButton";
import { NextButton } from "./NextButton";
import { Step } from "../../schema";

export function NavigationButtons(props: Props) {
  return (
    <Box
      sx={[
        {
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          alignItems: "end",
          flexGrow: 1,
          gap: 1,
          pb: { xs: 12, sm: 0 },
          mt: { xs: 2, sm: 0 },
          mb: "60px",
        },
        props.step !== 1
          ? { justifyContent: "space-between" }
          : { justifyContent: "flex-end" },
      ]}
    >
      <PreviousButton
        step={props.step}
        variant="text"
        sx={{ display: { xs: "none", sm: "flex" } }}
      />
      <PreviousButton
        step={props.step}
        variant="outlined"
        fullWidth
        sx={{ display: { xs: "flex", sm: "none" } }}
      />
      <NextButton step={props.step} />
    </Box>
  );
}

interface Props {
  step: Step;
}
