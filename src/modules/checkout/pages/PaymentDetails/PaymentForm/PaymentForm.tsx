"use client";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import SimCardRoundedIcon from "@mui/icons-material/SimCardRounded";
import { withMask } from "use-mask-input";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { PaymentContainer } from "./PaymentContainer";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export function PaymentForm() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <PaymentContainer>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle2">Credit card</Typography>
          <CreditCardRoundedIcon sx={{ color: "text.secondary" }} />
        </Box>
        <SimCardRoundedIcon
          sx={{
            fontSize: { xs: 48, sm: 56 },
            transform: "rotate(90deg)",
            color: "text.secondary",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: 2,
          }}
        >
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel htmlFor="card-number" required>
              Card number
            </FormLabel>
            <OutlinedInput
              id="card-number"
              autoComplete="card-number"
              placeholder="0000 0000 0000 0000"
              required
              size="small"
              inputRef={withMask("9999 9999 9999 9999")}
            />
          </FormGrid>
          <FormGrid sx={{ maxWidth: "20%" }}>
            <FormLabel htmlFor="cvv" required>
              CVV
            </FormLabel>
            <OutlinedInput
              id="cvv"
              autoComplete="CVV"
              placeholder="123"
              required
              size="small"
              inputRef={withMask("999")}
            />
          </FormGrid>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel htmlFor="card-name" required>
              Name
            </FormLabel>
            <OutlinedInput
              id="card-name"
              autoComplete="card-name"
              placeholder="John Smith"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid sx={{ flexGrow: 1 }}>
            <FormLabel htmlFor="card-expiration" required>
              Expiration date
            </FormLabel>
            <OutlinedInput
              id="card-expiration"
              autoComplete="card-expiration"
              placeholder="MM/YY"
              required
              size="small"
              inputRef={withMask("99/99")}
            />
          </FormGrid>
        </Box>
      </PaymentContainer>
      <FormControlLabel
        control={<Checkbox name="saveCard" />}
        label="Remember credit card details for next time"
      />
    </Box>
  );
}
