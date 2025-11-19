import { Button, TextField } from "@mui/material";
import { FormStepper } from "./FormStepper";

export function MultiStepForm() {
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
        <section className="max-w-lg w-full flex flex-col gap-8">
          <FormStepper />
          <header className="flex flex-col gap-2">
            <p className="text-blue font-medium text-sm leading-6">Step 1/4</p>
            <h3 className="font-medium text-xl leading-7">
              Enter your Name and Email to Begin!
            </h3>
            <p className="text-arsenic leading-7">
              Lorem ipsum is placeholder text.
            </p>
          </header>
          <form className="contents">
            <fieldset className="contents">
              <TextField label="Name" placeholder="Full Name" />
              <TextField label="Email" placeholder="Your Email" />
              <TextField
                label="Message"
                placeholder="Message"
                multiline
                rows={5}
              />
            </fieldset>
            <div className="flex justify-between">
              <Button variant="outlined">Previous Step</Button>
              <Button variant="contained">Next Step</Button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
