import { Button, TextField } from "@mui/material";
import { NextButton } from "../../components/NextButton";

export function PersonalDetails() {
  return (
    <>
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
        <TextField label="Name" placeholder="Full Name" />
        <TextField label="Email" placeholder="Your Email" />
        <TextField label="Message" placeholder="Message" multiline rows={5} />
        <div className="flex justify-between">
          <Button className="rounded-full" variant="outlined">
            Previous Step
          </Button>
          <NextButton />
        </div>
      </form>
    </>
  );
}
