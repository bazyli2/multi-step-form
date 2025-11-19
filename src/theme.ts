"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-poppins)",
  },
  palette: {
    primary: {
      main: "#0000FF",
    },
  },
});

export default theme;
