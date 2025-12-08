import { ComponentProps } from "react";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { FormField } from "./FormField";
import { Mask, useHookFormMask } from "use-mask-input";

export function RHFMaskFormField<TFieldValues extends FieldValues>(
  props: Props<TFieldValues>,
) {
  const { name, register, error, mask, ...rest } = props;
  const registerWithMask = useHookFormMask(register);
  const { ref, onBlur, onChange } = registerWithMask(name, mask);
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
  mask: Mask;
}

type Props<TFieldValues extends FieldValues> = Omit<
  ComponentProps<typeof FormField>,
  keyof RHFProps<TFieldValues>
> &
  RHFProps<TFieldValues>;
