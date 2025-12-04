"use client";

import { FormField } from "@/components/FormField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export function ShippingAddress() {
  return (
    <Grid container spacing={3}>
      <FormField
        required
        label="First Name"
        gridProps={{ size: { xs: 12, md: 6 } }}
        name="first-name"
        type="name"
        placeholder="John"
        autoComplete="first name"
        size="small"
      />
      <FormField
        gridProps={{ size: { xs: 12, md: 6 } }}
        label="Last name"
        name="last-name"
        type="last-name"
        placeholder="Snow"
        autoComplete="last name"
        required
        size="small"
      />
      <FormField
        gridProps={{ size: { xs: 12 } }}
        label="Address line 1"
        name="address1"
        type="address1"
        placeholder="Street name and number"
        autoComplete="shipping address-line1"
        required
        size="small"
      />
      <FormField
        label="Address line 2"
        gridProps={{ size: { xs: 12 } }}
        name="address2"
        type="address2"
        placeholder="Apartment, suite, unit, etc. (optional)"
        autoComplete="shipping address-line2"
        required
        size="small"
      />
      <FormField
        label="City"
        gridProps={{ size: { xs: 6 } }}
        name="city"
        type="city"
        placeholder="New York"
        autoComplete="City"
        required
        size="small"
      />
      <FormField
        label="State"
        gridProps={{ size: { xs: 6 } }}
        name="state"
        type="state"
        placeholder="NY"
        autoComplete="State"
        required
        size="small"
      />
      <FormField
        label="Zip / Postal code"
        gridProps={{ size: { xs: 6 } }}
        name="zip"
        type="zip"
        placeholder="12345"
        autoComplete="shipping postal-code"
        required
        size="small"
      />
      <FormField
        label="Country"
        gridProps={{ size: { xs: 6 } }}
        name="country"
        type="country"
        placeholder="United States"
        autoComplete="shipping country"
        required
        size="small"
      />
      <FormGrid size={{ xs: 12 }}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" />}
          label="Use this address for payment details"
        />
      </FormGrid>
    </Grid>
  );
}
