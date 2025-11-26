"use client";

import { CurrentStep } from "../../components/CurrentStep";
import { useStepParam } from "../../hooks/useStepParam";

const titles = {
  1: "Enter your Name and Email to Begin!",
  2: "Which feature are you most interested in?",
  3: "Enter your Location Details!",
};

export function FormHeader() {
  const step = useStepParam();
  return (
    <header className="flex flex-col gap-2">
      <CurrentStep />
      <h3 className="font-medium text-xl leading-7">{titles[step]}</h3>
      <p className="text-arsenic leading-7">Lorem ipsum is placeholder text.</p>
    </header>
  );
}
