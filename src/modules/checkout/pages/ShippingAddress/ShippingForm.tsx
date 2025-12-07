"use client";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RHFFormField } from "@/components/RHFFormField";
import { Button } from "@mui/material";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export function ShippingForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <Grid
      component={"form"}
      container
      spacing={3}
      onSubmit={handleSubmit(onSubmit)}
    >
      <RHFFormField
        register={register}
        error={errors.firstName}
        required
        label="First Name"
        gridProps={{ size: { xs: 12, md: 6 } }}
        name="firstName"
        type="name"
        placeholder="John"
        autoComplete="first name"
        size="small"
      />
      <RHFFormField
        register={register}
        error={errors.lastName}
        gridProps={{ size: { xs: 12, md: 6 } }}
        label="Last name"
        name="lastName"
        type="last-name"
        placeholder="Snow"
        autoComplete="last name"
        required
        size="small"
      />
      <RHFFormField
        register={register}
        error={errors.address1}
        gridProps={{ size: { xs: 12 } }}
        label="Address line 1"
        name="address1"
        type="address1"
        placeholder="Street name and number"
        autoComplete="shipping address-line1"
        required
        size="small"
      />
      <RHFFormField
        register={register}
        error={errors.address2}
        label="Address line 2"
        gridProps={{ size: { xs: 12 } }}
        name="address2"
        type="address2"
        placeholder="Apartment, suite, unit, etc. (optional)"
        autoComplete="shipping address-line2"
        required
        size="small"
      />
      <RHFFormField
        register={register}
        error={errors.city}
        label="City"
        gridProps={{ size: { xs: 6 } }}
        name="city"
        type="city"
        placeholder="New York"
        autoComplete="City"
        required
        size="small"
      />
      <RHFFormField
        register={register}
        error={errors.state}
        label="State"
        gridProps={{ size: { xs: 6 } }}
        name="state"
        type="state"
        placeholder="NY"
        autoComplete="State"
        required
        size="small"
      />
      <RHFFormField
        register={register}
        error={errors.postalCode}
        label="Zip / Postal code"
        gridProps={{ size: { xs: 6 } }}
        name="postalCode"
        type="zip"
        placeholder="12345"
        autoComplete="shipping postal-code"
        required
        size="small"
      />
      <RHFFormField
        register={register}
        error={errors.country}
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
      <Button type="submit">submit</Button>
    </Grid>
  );
}
