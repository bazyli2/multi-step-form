import { FormLabel, Grid, OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ComponentProps, useId } from "react";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export function FormField(props: Props) {
  const id = useId();
  const { label, required, gridProps, ...rest } = props;
  return (
    <FormGrid {...gridProps}>
      <FormLabel htmlFor={id} required={required}>
        {label}
      </FormLabel>
      <OutlinedInput {...rest} id={id} />
    </FormGrid>
  );
}

interface OwnProps {
  label: string;
  required?: boolean;
  gridProps: ComponentProps<typeof FormGrid>;
}

type Props = Omit<ComponentProps<typeof OutlinedInput>, keyof OwnProps> &
  OwnProps;
