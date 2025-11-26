"use client";

import { useEffect, useState } from "react";
import { FieldValues, useForm, UseFormProps } from "react-hook-form";
import { debounce } from "./utils/debounce";

const key = "form";

export function usePersistedForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues,
>(props?: UseFormProps<TFieldValues, TContext, TTransformedValues>) {
  const [isLoading, setIsLoading] = useState(true);
  const { subscribe, reset, ...rest } = useForm<
    TFieldValues,
    TContext,
    TTransformedValues
  >(props);

  useEffect(() => {
    const item = localStorage.getItem(key);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (item === null) return setIsLoading(false);
    const data = JSON.parse(item);
    reset(data);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(false);
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
    isLoading,
  } as const;
}
