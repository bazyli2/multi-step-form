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
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RHFMaskFormField } from "@/components/RHFMaskFormField";
import { RHFFormField } from "@/components/RHFFormField";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const formSchema = z.object({
  cardNumber: z.string(),
  cvv: z.string(),
  name: z.string(),
  expirationDate: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
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
          <RHFMaskFormField
            register={register}
            error={errors.cardNumber}
            label="Card Number"
            gridProps={{ sx: { flexGrow: 1 } }}
            name="cardNumber"
            autoComplete="card-number"
            placeholder="0000 0000 0000 0000"
            required
            size="small"
            mask="9999 9999 9999 9999"
          />
          <RHFMaskFormField
            register={register}
            error={errors.cvv}
            name="cvv"
            label="CVV"
            gridProps={{ sx: { maxWidth: "20%" } }}
            autoComplete="CVV"
            placeholder="123"
            required
            size="small"
            mask="999"
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <RHFFormField
            gridProps={{ sx: { flexGrow: 1 } }}
            register={register}
            error={errors.name}
            name="name"
            label="Name"
            autoComplete="card-name"
            placeholder="John Smith"
            required
            size="small"
          />
          <RHFMaskFormField
            gridProps={{ sx: { flexGrow: 1 } }}
            register={register}
            error={errors.expirationDate}
            name="expirationDate"
            label="Expiration date"
            autoComplete="card-expiration"
            placeholder="MM/YY"
            required
            size="small"
            mask="99/99"
          />
        </Box>
      </PaymentContainer>
      <FormControlLabel
        control={<Checkbox name="saveCard" />}
        label="Remember credit card details for next time"
      />
    </Box>
  );
}
