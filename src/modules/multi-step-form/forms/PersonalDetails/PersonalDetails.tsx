"use client";
import { ControlledTextField } from "@/components/ControlledTextField";
import { usePersistedForm } from "@/usePersistedForm";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

type Values = typeof defaultValues;

export function PersonalDetails() {
  const { control } = usePersistedForm<Values>({
    defaultValues,
  });
  return (
    <form className="contents">
      <ControlledTextField
        control={control}
        name="name"
        label="Name"
        placeholder="Full Name"
      />
      <ControlledTextField
        control={control}
        name="email"
        label="Email"
        placeholder="Your Email"
      />
      <ControlledTextField
        control={control}
        name="message"
        label="Message"
        placeholder="Message"
        multiline
        rows={5}
      />
    </form>
  );
}
