"use client";

import { Box } from "@mui/material";
import { useStepParam } from "@/modules/checkout/hooks/useStepParam";
import { PreviousButton } from "./PreviousButton";
import { NextButton } from "./NextButton";

export function NavigationButtons() {
  const step = useStepParam();
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
        step !== 1
          ? { justifyContent: "space-between" }
          : { justifyContent: "flex-end" },
      ]}
    >
      <PreviousButton
        variant="text"
        sx={{ display: { xs: "none", sm: "flex" } }}
      />
      <PreviousButton
        variant="outlined"
        fullWidth
        sx={{ display: { xs: "flex", sm: "none" } }}
      />
      <NextButton />
    </Box>
  );
}
