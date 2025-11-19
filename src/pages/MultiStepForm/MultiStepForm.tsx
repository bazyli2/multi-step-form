import { FormStepper } from "./FormStepper";

export function MultiStepForm() {
  return (
    <div className="flex-1 bg-blue flex items-center justify-center tracking-tight">
      <div className="max-w-7xl bg-white flex-1 py-16 flex flex-col items-center">
        <div className="text-blue text-lg leading-6 font-medium mb-8">
          Multistep Form
        </div>
        <div className="font-semibold text-6xl leading-20 min-h-24 flex items-center mb-12">
          <div className="px-8">Give us your</div>
          <div className="px-4 bg-blue text-white">feedback</div>
        </div>
        <div className="max-w-lg w-full flex flex-col gap-8">
          <FormStepper />
          <div className="flex flex-col gap-2">
            <div className="text-blue font-medium text-sm leading-6">
              Step 1/4
            </div>
            <div className="font-medium text-xl leading-7">
              Enter your Name and Email to Begin!
            </div>
            <div className="text-arsenic leading-7">
              Lorem ipsum is placeholder text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
