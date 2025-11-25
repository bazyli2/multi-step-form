import { useEffect } from "react";
import { FieldValues, useForm, UseFormProps } from "react-hook-form";

const key = "form";

export function usePersistedForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
>(props?: UseFormProps<TFieldValues, TContext, TTransformedValues>) {
  const { subscribe, ...rest } = useForm<
    TFieldValues,
    TContext,
    TTransformedValues
  >({
    ...props,
    defaultValues: () => {
      const item = localStorage.getItem(key);
      if (item === null) {
        return props?.defaultValues;
      }
      return JSON.parse(item);
    },
  });

  useEffect(() => {
    // make sure to unsubscribe;
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        localStorage.setItem(key, JSON.stringify(values));
      },
    });

    return () => callback();
  }, [subscribe]);

  return {
    ...rest,
    subscribe,
  } as const;
}
