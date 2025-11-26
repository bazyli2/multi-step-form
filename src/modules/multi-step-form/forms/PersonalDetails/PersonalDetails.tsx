"use client";
import { ControlledTextField } from "@/components/ControlledTextField";
import { usePersistedForm } from "@/usePersistedForm";
import z from "zod";
import { formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLoading } from "../../components/FormLoading";

type Values = z.infer<typeof formSchema>;

const defaultValues: Values = {
  name: "",
  email: "",
  message: "",
};

export function PersonalDetails() {
  const { control, isLoading } = usePersistedForm<Values>({
    defaultValues,
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });
  if (isLoading) return <FormLoading />;
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
