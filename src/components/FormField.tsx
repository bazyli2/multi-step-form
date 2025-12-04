import { FormHelperText, FormLabel, Grid, OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ComponentProps, useId } from "react";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export function FormField(props: Props) {
  const id = useId();
  const { label, required, gridProps, error, helperText, ...rest } = props;
  return (
    <FormGrid {...gridProps}>
      <FormLabel htmlFor={id} required={required} error={error}>
        {label}
      </FormLabel>
      <OutlinedInput {...rest} id={id} required={required} error={error} />
      <FormHelperText error={error} required={required}>
        {helperText}
      </FormHelperText>
    </FormGrid>
  );
}

interface OwnProps {
  label: string;
  required?: boolean;
  gridProps: ComponentProps<typeof FormGrid>;
  error?: boolean;
  helperText?: string;
}

type Props = Omit<ComponentProps<typeof OutlinedInput>, keyof OwnProps> &
  OwnProps;
