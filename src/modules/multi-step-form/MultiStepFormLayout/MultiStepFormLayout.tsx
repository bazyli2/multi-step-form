import { ReactNode } from "react";
import { FormStepper } from "./FormStepper";
import { PreviousButton } from "../components/PreviousButton";
import { NextButton } from "../components/NextButton";

export async function MultiStepFormLayout(props: Props) {
  return (
    <main className="flex-1 bg-blue flex items-center justify-center tracking-tight">
      <section className="max-w-7xl bg-white flex-1 py-16 flex flex-col items-center">
        <header className="text-center mb-12">
          <h1 className="text-blue text-lg leading-6 font-medium mb-8">
            Multistep Form
          </h1>
          <h2 className="font-semibold text-6xl leading-20 min-h-24 flex items-center">
            <span className="px-8">Give us your</span>
            <span className="px-4 bg-blue text-white">feedback</span>
          </h2>
        </header>
        <section className="max-w-lg w-full flex flex-col gap-8 min-h-[580px]">
          <FormStepper />
          {props.children}
          <div className="flex justify-between">
            <PreviousButton />
            <NextButton />
          </div>
        </section>
      </section>
    </main>
  );
}

interface Props {
  children?: ReactNode;
  params: Promise<unknown>;
}
