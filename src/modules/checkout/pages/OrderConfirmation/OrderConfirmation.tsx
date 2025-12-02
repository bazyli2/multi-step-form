import { Button, Stack, Typography } from "@mui/material";

export function OrderConfirmation() {
  return (
    <Stack spacing={2} useFlexGap>
      <Typography variant="h1">📦</Typography>
      <Typography variant="h5">Thank you for your order!</Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        Your order number is
        <strong>&nbsp;#140396</strong>. We have emailed your order confirmation
        and will update you once its shipped.
      </Typography>
      <Button
        variant="contained"
        sx={{ alignSelf: "start", width: { xs: "100%", sm: "auto" } }}
      >
        Go to my orders
      </Button>
    </Stack>
  );
}
