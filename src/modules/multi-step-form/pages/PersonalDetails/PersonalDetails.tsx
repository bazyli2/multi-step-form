"use client";
import { CurrentStep } from "../../components/CurrentStep";
import { NextButton } from "../../components/NextButton";
import { PreviousButton } from "../../components/PreviousButton";
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
    <>
      <header className="flex flex-col gap-2">
        <CurrentStep />
        <h3 className="font-medium text-xl leading-7">
          Enter your Name and Email to Begin!
        </h3>
        <p className="text-arsenic leading-7">
          Lorem ipsum is placeholder text.
        </p>
      </header>
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
    </>
  );
}
