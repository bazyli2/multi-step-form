import { TextField } from "@mui/material";
import { ComponentProps } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export function RHFTextField<TFieldValues extends FieldValues>(
  props: Props<TFieldValues>,
) {
  const { name, register, error, ...rest } = props;
  const { ref, onBlur, onChange } = register(name);
  const isError = error !== undefined;
  return (
    <TextField
      {...rest}
      inputRef={ref}
      name={name}
      slotProps={{
        htmlInput: {
          onChange,
          onBlur,
        },
      }}
      error={isError}
      helperText={error?.message}
    />
  );
}

interface RHFProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  error?: FieldError | undefined;
}

type Props<TFieldValues extends FieldValues> = Omit<
  ComponentProps<typeof TextField>,
  keyof RHFProps<TFieldValues>
> &
  RHFProps<TFieldValues>;
