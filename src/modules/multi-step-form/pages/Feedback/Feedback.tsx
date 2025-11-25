import { TextField } from "@mui/material";
import { FeatureSelect } from "./FeatureSelect";
import { NextButton } from "../../components/NextButton";
import { PreviousButton } from "../../components/PreviousButton";
import { CurrentStep } from "../../components/CurrentStep";

export function Feedback() {
  return (
    <>
      <header className="flex flex-col gap-2">
        <CurrentStep />
        <h3 className="font-medium text-xl leading-7">
          Which feature are you most interested in?
        </h3>
        <p className="text-arsenic leading-7">
          Lorem ipsum is placeholder text.
        </p>
      </header>
      <form className="contents">
        <FeatureSelect />
        <TextField label="Message" placeholder="Message" multiline rows={5} />
        <div className="flex justify-between">
          <PreviousButton />
          <NextButton />
        </div>
      </form>
    </>
  );
}
