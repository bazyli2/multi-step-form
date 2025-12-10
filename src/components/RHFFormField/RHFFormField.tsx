import { ComponentProps } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { FormField } from "../FormField";

export function RHFFormField<TFieldValues extends FieldValues>(
  props: Props<TFieldValues>,
) {
  const { name, register, error, ...rest } = props;
  const { ref, onBlur, onChange } = register(name);
  const isError = error !== undefined;
  return (
    <FormField
      {...rest}
      inputRef={ref}
      name={name}
      slotProps={{
        input: {
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
  ComponentProps<typeof FormField>,
  keyof RHFProps<TFieldValues>
> &
  RHFProps<TFieldValues>;
