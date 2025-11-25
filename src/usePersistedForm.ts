"use client";

import { useEffect } from "react";
import { FieldValues, useForm, UseFormProps } from "react-hook-form";
import { debounce } from "./utils/debounce";

const key = "form";

export function usePersistedForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
>(props?: UseFormProps<TFieldValues, TContext, TTransformedValues>) {
  const { subscribe, reset, ...rest } = useForm<
    TFieldValues,
    TContext,
    TTransformedValues
  >(props);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item === null) return;
    const data = JSON.parse(item);
    reset(data);
  }, [reset]);

  useEffect(() => {
    function persistValues({ values }: { values: TFieldValues }) {
      localStorage.setItem(key, JSON.stringify(values));
    }
    // make sure to unsubscribe;
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: debounce(persistValues, 1000),
    });

    return () => callback();
  }, [subscribe]);

  return {
    ...rest,
    subscribe,
    reset,
  } as const;
}
