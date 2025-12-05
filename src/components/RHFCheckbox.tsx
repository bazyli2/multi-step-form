import { Checkbox } from "@mui/material";
import { ComponentProps } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export function RHFCheckbox<TFieldValues extends FieldValues>(
  props: Props<TFieldValues>,
) {
  const { name, register, ...rest } = props;
  const { ref, onBlur, onChange } = register(name);
  return (
    <Checkbox
      {...rest}
      inputRef={ref}
      name={name}
      slotProps={{
        input: {
          onChange,
          onBlur,
        },
      }}
    />
  );
}

interface RHFProps<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
}

type Props<TFieldValues extends FieldValues> = Omit<
  ComponentProps<typeof Checkbox>,
  keyof RHFProps<TFieldValues>
> &
  RHFProps<TFieldValues>;
