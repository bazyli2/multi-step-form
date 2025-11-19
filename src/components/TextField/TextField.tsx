"use client";

import { FormControl, InputBase, InputLabel } from "@mui/material";
import { ComponentProps, useId } from "react";

interface Props extends ComponentProps<typeof InputBase> {
  label: string;
}

export function TextField(props: Props) {
  const { label, ...rest } = props;
  const id = useId();
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor={id}>
        {label}
      </InputLabel>
      <InputBase
        {...rest}
        id={id}
        className="mt-6"
        slotProps={{ input: { className: "bg-bright-gray rounded-lg p-3" } }}
      />
    </FormControl>
  );
}
