import Stack from "@mui/material/Stack";
import { PaymentForm } from "./PaymentForm";

export function PaymentDetails() {
  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
      <PaymentForm />
    </Stack>
  );
}
