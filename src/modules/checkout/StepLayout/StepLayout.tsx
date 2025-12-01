import { Box, Button } from "@mui/material";
import { ReactNode } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const activeStep = 0;

export function StepLayout(props: Props) {
  console.log("step layout");
  return (
    <>
      {props.children}
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
          activeStep !== 0
            ? { justifyContent: "space-between" }
            : { justifyContent: "flex-end" },
        ]}
      >
        {activeStep !== 0 && (
          <Button
            startIcon={<ChevronLeftRoundedIcon />}
            variant="text"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            Previous
          </Button>
        )}
        {activeStep !== 0 && (
          <Button
            startIcon={<ChevronLeftRoundedIcon />}
            variant="outlined"
            fullWidth
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            Previous
          </Button>
        )}
        <Button
          variant="contained"
          endIcon={<ChevronRightRoundedIcon />}
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
        >
          Next
        </Button>
      </Box>
    </>
  );
}

interface Props {
  children: ReactNode;
}
