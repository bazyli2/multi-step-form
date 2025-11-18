import { FormStepper } from "./FormStepper";

export function MultiStepForm() {
  return (
    <div className="flex-1 bg-blue flex items-center justify-center">
      <div className="max-w-7xl bg-white flex-1 py-16 flex flex-col items-center">
        <div className="text-blue text-lg leading-6 tracking-tight font-medium mb-8">
          Multistep Form
        </div>
        <div className="font-semibold text-6xl leading-20 tracking-tight min-h-24 flex items-center">
          <div className="px-8">Give us your</div>
          <div className="px-4 bg-blue text-white">feedback</div>
        </div>
        <FormStepper />
      </div>
    </div>
  );
}
