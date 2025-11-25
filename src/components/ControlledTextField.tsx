"use client";

import { TextField } from "@mui/material";
import { ComponentProps } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

export function ControlledTextField<T extends FieldValues>(
  props: UseControllerProps<T> & ComponentProps<typeof TextField>,
) {
  const { field, fieldState } = useController({ ...props, disabled: false });
  /* eslint-disable */
  const {
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
    disabled,
    ...rest
  } = props;
  /* eslint-disable */
  return (
    <TextField
      disabled={disabled}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
      {...rest}
    />
  );
}
