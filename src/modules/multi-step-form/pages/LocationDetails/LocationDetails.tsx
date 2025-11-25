import { TextField } from "@mui/material";
import { CountrySelect } from "./CountrySelect";
import { NextButton } from "../../components/NextButton";
import { PreviousButton } from "../../components/PreviousButton";
import { CurrentStep } from "../../components/CurrentStep";

export function LocationDetails() {
  return (
    <>
      <header className="flex flex-col gap-2">
        <CurrentStep />
        <h3 className="font-medium text-xl leading-7">
          Enter your Location Details!
        </h3>
        <p className="text-arsenic leading-7">
          Lorem ipsum is placeholder text.
        </p>
      </header>
      <form className="contents">
        <CountrySelect />
        <TextField label="Postal Code" placeholder="Postal Code" />
      </form>
    </>
  );
}
